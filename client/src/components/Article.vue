<template>
  <div>
    <h1>{{ article.title }}</h1>
    <img :src="article.img" style="width:50%;" alt=photo>
    <p>{{ article.article }}</p>
    <p>{{ article.createdAt }}</p>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'ArticleBlog',
    props: ['id'],
    data () {
      return {
        article: ''
      }
    },
    methods: {
      getArticleDetail (id) {
        axios.get(`http://localhost:4000/api/blog/detail/${id}`)
        .then(response => {
          console.log(response)
          this.article = response.data[0]
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
    mounted () {
      this.getArticleDetail(this.id)
    },
    watch: {
      id (newId) {
        this.getArticleDetail(newId)
      }
    }
  }
</script>

<style scoped>
  p {
    text-align: left;
    padding-top: 20px;
  }
</style>
