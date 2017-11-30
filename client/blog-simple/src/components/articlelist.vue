<template>
  <div class="col-md-8">
    <div class="list-group-item">
      <div class="row" v-for="post in posts">
        <div class="col-md-4">
          <img :src="post.urlimg" class="img-responsive">
        </div>
        <div class="col-md-8">
          <h4 class="list-group-item-heading">{{post.title}}</h4>
          <p class="list-group-item-text">{{post.description.substring(0, 150)}}...</p>
        </div>
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

  props: ['posts'],

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
img {
  width: 200px;
}
</style>
