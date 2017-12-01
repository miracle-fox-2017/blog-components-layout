<template>
  <div>
    <h1>{{ article.title }}</h1>
    <img :src="article.img" style="width:100%" alt=photo>
    <p style="text-align: justify">{{ article.article }}</p>
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
