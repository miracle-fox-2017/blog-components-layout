<template>
  <div>
    <h1>{{ article.title }}</h1>
    <img :src="article.img" alt="foo">
    <p>{{ article.article }}</p>
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
    created: function () {
      axios.get(`http://localhost:4000/api/blog/${this.id}`)
      .then(response => {
        this.article = response.data[0]
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
</script>
