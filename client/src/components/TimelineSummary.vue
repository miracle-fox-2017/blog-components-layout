<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <router-link :to="'/article/'+ article._id" v-text="article.title"></router-link>
    </div>
    <div class="panel-body" v-text="article.textPost"></div>
  </div>
</template>
<script>
  export default {
    props: ['article']
  }
</script>