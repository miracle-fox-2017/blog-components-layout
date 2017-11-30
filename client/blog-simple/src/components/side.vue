<template>
  <div class="col-md-4">
    <div class="card card-primary">
      <div class="card-header">
        Last Article
      </div>
      <div class="card-body">
        <div class="list-group">
          <div class="" v-for="post in posts">
            <p><router-link :to="`/blog/${post._id}`">{{post.title}}</router-link></p>
          </div>
        </div>
      </div>
    </div>
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
