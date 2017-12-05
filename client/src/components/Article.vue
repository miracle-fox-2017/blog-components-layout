<template>
  <div class="col-md-9">
    <div class="article">
      <div class="panel panel-default">
        <div class="panel-heading"><router-link :to="{ path: '/blog/' + article._id, params: {} }"><h2>{{ article.title }}</h2></router-link></div>
        <div class="panel-body">
          <img :src="article.image" alt="image" class="img-responsive" />
        </div>
        <div class="panel-body">
          <p>{{ article.article }}</p>
        </div>
      </div>
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
      axios.get('http://vps.masfaris.com:3003/api/blog/' + this.$route.params.id)
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
