<template>
  <div class="all-posts">
    <UserPost v-for="(article, key) in articles" :key="key" :article="article">  
    </UserPost>
  </div>
</template>

<script>
import Post from '@/components/admin/UserPost'

export default {
  components: {
    UserPost: Post
  },
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticles () {
      this.$http.get('/posts')
      .then(({data}) => {
        this.articles = data
      })
      .catch((err) => console.log(err))
    }
  },
  created () {
    this.getArticles()
  }
}
</script>

<style>

</style>
