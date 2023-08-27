<template>
    <span class="badge me-1" :class="[methodsClass]">
        {{ method }}
    </span>
</template>

<script>
export default {
    name: "Method",

    props: ['method'],

    computed: {
        methodsClass(){
            let classes = {
                'GET': 'bg-label-info',
                'POST': 'bg-label-success',
                'PUT': 'bg-label-warning',
                'PATCH': 'bg-label-warning',
                'DELETE': 'bg-label-danger',
            };

            return classes[this.method] !== undefined ? classes[this.method] : 'bg-label-secondary';
        }
    },
}
</script>