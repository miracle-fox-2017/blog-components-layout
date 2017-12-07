<template>
  <div class="list-group-item">
    <div class="row" v-for="article in articles">
      <div class="col-md-2">
        <img :src="article.urlimg" class="img-responsive">
      </div>
      <div class="col-md-10">
        <h4 class="list-group-item-heading">{{article.title}}</h4>
        <p class="list-group-item-text">{{article.description.substring(0, 150)}}...</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'Articlelist',
  computed: {
    ...mapState([
      'articles'
    ])
  },
  methods: {
    ...mapActions([
      'getAllArticles'
    ])
  },
  created: function () {
    this.getAllArticles()
  }
}
</script>

<style lang="css">
img {
  width: 90%;
}
</style>
