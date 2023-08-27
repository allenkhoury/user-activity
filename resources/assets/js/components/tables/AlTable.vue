<template>
    <div>
        <div v-if="searching" class="row justify-content-end">
            <div class="col-md-3">
                <div class="form-group mb-0">
                    <input @input="searchTable()" v-model="filters.search.value" id="SearchTable" type="search" class="form-control form-control-sm" placeholder="Search..."/>
                </div>
            </div>
        </div>

        <table class="table table-hover table-row-bordered g-4" :class="[tableClass, {'loading': isLoading}]">
            <thead :class="headerClass">
                <tr class="fw-bolder fs-6 text-gray-800">
                    <template v-for="(header, index) in columnsVisible">

                        <th v-if="ordering && header.orderable !== false" style="cursor: pointer" @click="sortTableBy(index)" :class="header.classHeader">
                            <a class="text-dark w-100 align-items-center">
                                <span class="me-3">
                                    {{ header.label }}
                                </span>

                                <template v-if="header.orderable !== false">
                                    <i v-if="order && order[0].column !== index" class="fas fa-sort"></i>
                                    <i v-else-if="order && order[0].dir === 'asc'" class="fas fa-sort-up text-dark"></i>
                                    <i v-else-if="order && order[0].dir === 'desc'" class="fas fa-sort-down text-dark"></i>
                                </template>
                            </a>
                        </th>

                        <th v-else="" :class="header.classHeader">
                            <span>
                                {{ header.label }}
                            </span>
                        </th>
                    </template>
                </tr>
            </thead>

            <tbody :class="bodyClass">
                <tr v-for="(item, rowIndex) in tditems"
                    :class="getRowClass(item, rowIndex)"
                >
                    <template v-for="(column, index) in columnsVisible">
                        <td v-if="hasOptions(index, 'template')"
                            v-html="getCustomTemplate(index, column.name, item)"
                            :class="getOption(index, 'class')"></td>

                        <td v-else-if="hasOptions(index, 'component')"
                            :class="getOption(index, 'class')">
                            <component
                                v-if="getComponentData(column, item, 'html')"
                                :is="getComponentData(column, item, 'name')"
                                v-bind="getComponentData(column, item, 'props')"
                                v-html="getComponentData(column, item, 'html')"
                                v-on="getComponentData(column, item, 'methods')"
                            ></component>
                            <component
                                v-else
                                :is="getComponentData(column, item, 'name')"
                                v-bind="getComponentData(column, item, 'props')"
                                v-on="getComponentData(column, item, 'methods')"
                            ></component>
                        </td>

                        <td v-else :class="getOption(index, 'class')">
                            {{ item[column.name] }}
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>

        <div class="row mt-10 py-3 justify-content-between">
            <div v-if="paging" class="col-md-6 col-12 d-flex align-items-center">
                <label for="AlTablesPageLength" class="fw-bold me-2">
                    Display:
                </label>
                <select class="form-select form-select-sm me-2 mw-25" @change="loadTable" v-model="filters.length" id="AlTablesPageLength">
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="150">150</option>
                </select>
                <small class="fw-bold text-nowrap">
                    of {{ totalItems }} entries
                </small>
            </div>

            <div v-if="paging" class="col-md-6 col-12 text-end">
                <al-table-pagination :parent="name" :pagination="pagination" :active-pagination="activePagination" :length="filters.length"></al-table-pagination>
            </div>

        </div>
    </div>
</template>

<script>

import AlTablePagination from "./AlTablePagination.vue";

var qs = require('qs');

export default {
    name: 'AlTable',

    components: {
        AlTablePagination,
    },

    props: {
        'name': {
            type: String,
            default: 'table'
        },
        'tableClass': {},
        'headerClass': {},
        'bodyClass': {},

        'url': {},
        'columns': {},
        'filter': {},
        'rows': {},

        'paging': {
            type: Boolean,
            default: true,
        },
        'searching': {
            type: Boolean,
            default: false,
        },
        'search': {},
        'ordering' : {
            type: Boolean,
            default: true,
        },

        'orderable':{
            type: Array,
            default(){
                //return [0, 'asc'];
                return [];
            },
           /* validator(value){
                // Validation
                // 1- array length must be 2: column index and dir, ie: [0, 'asc']
                // 2- array dir must be either asc or desc
                return ['asc', 'desc'].indexOf(value[1]) !== -1 && value.length === 2;
            }*/
        },
    },

    mounted: function () {
        this.loadTable();
    },

    created: function () {
        var instance = this;

        // Create constructed columns
        this.constructColumns();

        // Set up order
        // this.setUpOrdering();

        // If pagination is disabled, show all items
        if( !this.paging )
            this.filters.length = -1;

        AlEvent.listen('reloadTable', function (name = null) {
            name = name ? name : 'table';

            if (instance.name === name)
                instance.loadTable();
        });

        AlEvent.listen('navigate', function (data) {
            if (instance.name === data.name)
                instance.navigateTable(data.page);
        });
    },

    computed: {
        columnsComputed: function () {

            let computed = {};
            for (let key in this.columns) {
                computed[this.columns[key]['name']] = this.columns[key];
            }

            return computed;
        },

        columnsVisible: function () {
            return this.columns.filter(column => !column.hidden);
        }
    },

    watch: {
        search: function (val) {
            if (!this.awaitingSearch) {
                setTimeout(() => {
                   this.loadTable();
                    this.awaitingSearch = false;
                }, 300);
            }
            this.awaitingSearch = true;
        },
    },

    data() {
        return {
            tditems: [],

            constructedColumns: [],

            pagination: 0,
            activePagination: 1,
            totalItems: 0,

            isLoading: false,
            awaitingSearch: false,

            filters: {
                start: 0,
                length: 50,
                search: {
                    value: ''
                },
            },

            orderTableTriggered: false,
            order: [{
                column: '',
                dir: 'asc'
            }]
        }
    },

    methods: {
        // DATA
        loadTable() {
            let instance = this;
            let updatedFilters = instance.filters;

            // If custom search is set, update filters.search.value
            if( instance.search ){
                updatedFilters.search = {
                    value: instance.search
                };
            } else {
                updatedFilters.search = {
                    value: ''
                };
            }

            let allFilterOptions = {...updatedFilters, ...instance.filter, ...instance.constructedColumns};

            if( this.orderTableTriggered ){
                allFilterOptions['order'] = this.order;
            }

            instance.loading();
            axios.get(instance.url, {
                params: allFilterOptions,
                paramsSerializer: function (params) {
                    return qs.stringify(params, {arrayFormat: 'indices'})
                },
            })
                .then(function (response) {
                    instance.loaded();
                    instance.tditems = response.data.data;
                    instance.pagination = Math.ceil(response.data.recordsFiltered / instance.filters.length);
                    instance.totalItems = response.data.recordsFiltered;

                    AlEvent.fire('tableLoaded', instance.$data);
                })
                .catch(function (error) {
                    instance.loaded();
                    let response = error.response;

                    console.group('Error fetching data');
                    console.error(response.data.message);
                    console.groupEnd();
                });
        },

        // CONSTRUCT COLUMN
        constructColumns() {
            let instance = this;
            let columns = instance.columns;
            let constructedColumns = [];

            for (let index in columns) {
                if (!columns[index])
                    continue;

                let column = columns[index];
                constructedColumns.push({
                    'data': column.name,
                    'name': column.name,
                    'searchable': column.searchable !== false,
                    'orderable': column.orderable !== false,
                    'search': {
                        'value': '',
                        'regex': false
                    }
                })
            }

            instance.constructedColumns = {'columns': constructedColumns};
        },

        // CUSTOMIZE DATA
        hasOptions(columnIndex, option) {
            return this.columns[columnIndex][option] !== undefined;
        },

        getOption(columnIndex, option) {
            return this.columns[columnIndex][option] ?
                this.columns[columnIndex][option] : '';
        },

        getCustomTemplate(columnIndex, columnField, item) {
            let templateFunction = this.columns[columnIndex]['template'];
            return templateFunction(item[columnField], item, this.$parent);
        },

        getComponentData(column, item, data){
            let componentFunction = column.component;
            let component = componentFunction( item[column.name], item, this );
            return component[data];
        },

        getRowClass(item, rowIndex){
            if( this.rows && typeof this.rows === 'object' ){
                if( this.rows.classes !== undefined && typeof this.rows.classes === 'function' )
                    return this.rows.classes(item, rowIndex);
            }

            return null;
        },

        // SEARCH
        searchTable() {
            this.filters.start = 0;
            this.activePagination = 1;
            this.loadTable();
        },

        // SORTING
        sortTableBy(header) {
            let orderColumn = this.order[0];
            this.orderTableTriggered = true;

            if (orderColumn.column === header && orderColumn.dir) {

                if( orderColumn.dir === 'desc' ){

                    orderColumn.dir = '';
                    this.orderTableTriggered = false;
                    orderColumn.column = null;

                } else if ( orderColumn.dir === 'asc' ){
                    orderColumn.dir = 'desc';
                }

            } else {
                orderColumn.dir = 'asc';
                orderColumn.column = header;
            }


            this.loadTable();
        },

        loading(){
            this.isLoading = true;
        },

        loaded(){
            this.isLoading = false;
        },

        /*setUpOrdering(){
            let column, dir = '';

            if( this.ordering && this.order.length > 0 ){
                column = this.order[0];
                dir = this.order[1];

                this.order[0].column = column;
                this.order[0].dir = dir;
            } else {
                delete this.order;
            }
        },*/


        // Pagination
        navigateTable(page) {
            this.filters.start = (page - 1) * this.filters.length;
            this.activePagination = page;
            this.loadTable();
        },
    }
}
</script>