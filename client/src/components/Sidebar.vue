<template>
    <div class="col-sm-3 sidenav">
        <p v-for="article in articles">
            <router-link :to="`/${article._id}`">{{article.title}}</router-link>
        </p>
    </div>

</template>

<script>
    export default {
        props: ['articles'],
        name: 'Sidebar'
    }

</script>

<style scoped>

</style>