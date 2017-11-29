<template>
  <div class="col-sm-9 col-lg-9">
    <div class="" v-for="(article, index) in articles">
      <div class="thumbnail text-left">
        <img :src="article.urlimg" alt="">
        <h4>{{article.title}}</h4>
        <p>{{article.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'articlelist',

  data () {
    return {
      articles: []
    }
  },

  methods: {
    getAllarticle: function () {
      this.$http.get('/api/articles')
        .then((response) => {
          this.articles = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },

  created: function () {
    this.getAllarticle()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
