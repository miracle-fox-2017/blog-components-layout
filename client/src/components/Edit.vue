<template>
    <div class="col-sm-9">
        {{article}}
    </div>
</template>
<script>
    export default {
        props: ['article'],
        name: 'Edit',
        methods: {
        }
    }

</script>

<style scoped>
    .panel-body img {
        width: 20%;
        height: 10%;
    }
</style>