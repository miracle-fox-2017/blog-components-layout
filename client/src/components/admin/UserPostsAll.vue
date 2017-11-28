<template>
  <div class="all-posts">
    <UserPost v-for="(article, key) in articles" :key="key" :article="article" @delete-post="deletePost">  
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
    },
    deletePost (payload) {
      this.$http.delete(`/posts/${payload.id}`)
      .then(success => {
        let index = -1
        console.log(`NIH SI RESPONSE ${JSON.stringify(success, null, 2)}`)
        console.log(`ARTICLES NIH   ====>>> ${JSON.stringify(this.articles, null, 2)}`)
        for (let i = 0; i < this.articles.length; i++) {
          console.log(`CUK ...... ${this.articles[i]._id === payload.id}`)
          if (this.articles[i]._id === payload.id) {
            index = i
          }
          console.log(`INDEX NIH ?????????????????????? ${index}`)
          this.articles.splice(index, 1)
        }
      })
      .catch(err => console.log(err))
    }
  },
  created () {
    this.getArticles()
  }
}
</script>

<style>

</style>
