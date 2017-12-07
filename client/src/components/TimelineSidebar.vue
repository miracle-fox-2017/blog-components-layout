<template>
  <div class="row">
    <router-link :to="'/article/'+ article._id" v-text="article.title"></router-link>
  </div>
</template>
<script>
  export default {
    props: ['article'],
    name: 'sidebarpakhaji'
  }
</script>
