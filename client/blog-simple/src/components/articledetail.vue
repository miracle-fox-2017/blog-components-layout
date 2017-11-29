<template>
  <div class="col-sm-9 col-lg-9">
    <div class="thumbnail text-left">
      <img :src="articles.urlimg" alt="">
      <h4>{{articles.title}}</h4>
      <p>{{articles.description}}</p>
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
          console.log(response.data)
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
<style>
</style>
