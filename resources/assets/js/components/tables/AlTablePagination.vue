<template>
<div>

    <!-- First page  -->
    <a v-if="pagination > 3"
        @click.prevent="navigateTable(1)"
       class="btn rounded-pill btn-icon btn-light btn-sm me-2"
       :class="{'disabled': activePagination === 1 }"
       title="First page"
       href="javascript:;"
    >
        <i class="fas fa-angle-double-left"></i>
    </a>

    <!-- Back button  -->
    <a @click.prevent="navigateTableBack"
       class="btn rounded-pill btn-icon btn-light btn-sm me-2"
       :class="{'disabled': activePagination === 1 }"
       title="Back"
       href="javascript:;"
    >
        <i class="fas fa-angle-left"></i>
    </a>

    <!-- First page, show this if we are far from the first page   -->
    <!--    <a @click.prevent="navigateTable(1)"
       v-if="activePagination - 1 > 2"
       class="btn rounded-pill btn-icon btn-light btn-sm me-2"
    >
        {{ 1 }}
    </a>-->

    <!-- 3 dots, between page 1 and the actual pages   -->
    <!--    <a v-if="activePagination - 1 > 2"
       class="btn rounded-pill disabled btn-icon btn-light btn-sm me-2"
    >
        ...
    </a>-->

    <!-- Show page, before and after, ie: 3,4,5   -->
    <template v-if="pagination">
        <template v-for="(page, index) in pagination">
            <a v-if="inPaginationRange(index)"
               @click.prevent="navigateTable(page)"
               class="btn rounded-pill btn-icon btn-light btn-sm me-2"
               :class="{ 'btn-primary': activePagination === page}"
               :title="'Page ' + page"
               href="javascript:;"
            >
                {{ page }}
            </a>
        </template>
    </template>

    <!-- also 3 dots, between the actual pages and the last page   -->
    <!--    <a v-if="pagination - activePagination > 2"
       class="btn rounded-pill disabled btn-icon btn-light btn-sm me-2"
    >
        ...
    </a>-->

    <!-- Show last page if we are far from it -->
    <!--    <a @click.prevent="navigateTable(pagination)"
       v-if="pagination - activePagination > 2"
       class="btn rounded-pill btn-icon btn-light btn-sm me-2"
    >
        {{ pagination }}
    </a>-->

    <!-- The next button -->
    <a @click.prevent="navigateTableNext"
       class="btn rounded-pill btn-icon btn-light btn-sm me-2"
       :class="{'disabled': activePagination === pagination}"
       title="Next"
       href="javascript:;"
    >
        <i class="fas fa-angle-right"></i>
    </a>

    <!-- The last page    -->
    <a v-if="pagination > 3"
        @click.prevent="navigateTable(pagination)"
       class="btn rounded-pill btn-icon btn-light btn-sm me-2"
       :class="{'disabled': activePagination === pagination}"
       title="Last page"
       href="javascript:;"
    >
        <i class="fas fa-angle-double-right"></i>
    </a>

</div>
</template>

<script>
export default {

    props:[
        'parent',
        'pagination',
        'activePagination',
        'length'
    ],

    name: "AlTablePagination",

    methods: {

        navigateTable( page ) {
            let instance = this;
            AlEvent.fire('navigate', {
                name: instance.parent,
                page: page
            });
        },

        navigateTableBack(){
            if( this.activePagination !== 1 )
                this.navigateTable( this.activePagination - 1 );
        },

        navigateTableNext(){
            if( this.activePagination !== this.pagination )
                this.navigateTable( this.activePagination + 1 );
        },

        inPaginationRange( index ){
            let ActiveIndex = index + 1; // Because array 0 -> page 1

            if( this.activePagination === 1 ){
                return ActiveIndex < 4
            } else if( this.activePagination === this.pagination ){
                return this.pagination - ActiveIndex < 3;
            } else {
                return ActiveIndex === this.activePagination - 1 ||
                    ActiveIndex === this.activePagination ||
                    ActiveIndex === this.activePagination + 1;
            }
        },
    }
}
</script>