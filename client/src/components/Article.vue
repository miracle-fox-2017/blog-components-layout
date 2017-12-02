<template>
  <div class="col-md-9">
    <div class="article">
      <h2>{{ article.title }}</h2>
      <img :src="article.image" alt="image" />
      <p>{{ article.article }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Article',
  data () {
    return {
      msg: 'Article',
      pos: '',
      article: ''
    }
  },
  methods: {
    getArticleAxios: function () {
      axios.get('http://localhost:3000/api/blog/' + this.$route.params.id)
      .then((resp) => {
        this.article = resp.data.blogPost
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  watch: {
    '$route' (to, from) {
      this.getArticleAxios()
    }
  },
  created () {
    this.getArticleAxios()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
