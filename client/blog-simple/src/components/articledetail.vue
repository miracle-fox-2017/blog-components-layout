<template>
  <div class="col-md-8">
    <h2>{{ articles.title }}</h2>
    <div class="row">
      <div class="col-md-offset-2 col-md-8">
        <img :src="articles.urlimg" class="img-responsive"/>
      </div>
    </div>
    <div class="row">
      <div id="article-content" class="col-md-12">
        <p>{{ articles.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'articledetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      articles: ''
    }
  },

  props: ['id'],

  methods: {
    getOnearticle: function (artikelid) {
      this.$http.get('/api/articles/' + artikelid)
        .then((response) => {
          this.articles = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },

  watch: {
    id: function () {
      this.getOnearticle(this.id)
    }
  },

  created: function () {
    this.getOnearticle(this.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 400px;
  margin-left: 40%;
}
</style>
