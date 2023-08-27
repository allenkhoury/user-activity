import AlTable from "../components/tables/AlTable.vue";
import Method from "../components/Method.vue";
import activityLog from "../mixins/activity-log";
import Common from "../mixins/common";

new Vue({
    el: '#MasterApp',
    mixins: [activityLog, Common],

    components: {AlTable, Method},

    created() {
    },

    data:{
        userNameField: userNameField,
        filters: {
            search: null,
        },
        columns: [
            {
                name: 'created_at_formatted', label: 'Date', orderable: true, template: function (field, item) {
                    return field;
                }
            },
            {
                name: 'user_full_name', label: 'User', orderable: true, template: function (field, item) {
                    return field;
                }
            },
            {
                name: 'route', label: 'Page', orderable: true, template: function (field, item) {
                    return `<a href="/${field}">${field}</a>`;
                }
            },
            {
                name: 'method', label: 'Method', orderable: true,
                component: function (field, item, vm) {
                    return {
                        name: 'method',
                        props: {
                            method: field,
                        },
                    }
                },
            },
            {
                name: '', label: '', orderable: true,
                component: function (field, item, vm) {
                    return {
                        name: 'button',
                        props: {
                            type: 'button',
                            class: 'btn btn-sm btn-outline-primary',
                        },
                        html: 'Details',
                        methods: {
                            click: function (event) {
                                vm.$parent.openDetailsModal(item.id, event);
                            }
                        }
                    }
                },
            },
        ],
    },

    methods: {
        reloadTable() {
            TdEvent.fire('reloadTable');
        },
    }
});