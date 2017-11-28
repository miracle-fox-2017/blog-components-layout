<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <Sidebar :blogs="blogs"></Sidebar>
        <Post></Post>

      </div>
      <div class="col-md-9">
        <router-view :blogs="blogs"></router-view>
      </div>
      <div class="col-md-12">
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  import MainPage from '@/components/MainPage'
  import Post from '@/components/Post'
  export default {
    name: 'MainBlog',
    data () {
      return {
        blogs: []
      }
    },
    components: {
      Sidebar,
      MainPage,
      Post
    },
    methods: {
      getAllArticles () {
        this.$axios.get('http://localhost:3000/articles')
        .then((response) => {
          this.blogs.push(...response.data)
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    created: function () {
      this.getAllArticles()
    },
    watch: {

    }
  }
</script>

<style>
.container {
  padding-bottom: 2em
}
</style>
