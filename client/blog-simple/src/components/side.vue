<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar" v-for="post in posts">
      <li><router-link :to="`/blog/${post._id}`">{{post.title}}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'side',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  props: ['posts']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
