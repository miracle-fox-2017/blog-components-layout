<template>
  <div class="">
    <h2>{{ article.title }}</h2>
    <div class="row">
      <div class="col-md-offset-2 col-md-8">
        <img :src="article.urlimg" class="img-responsive"/>
      </div>
    </div>
    <div class="row">
      <div id="article-content" class="col-md-12">
        <p>{{ article.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'ArticleDetail',
  props: ['id'],
  computed: {
    ...mapState([
      'article'
    ])
  },
  methods: {
    ...mapActions([
      'getOneArticles'
    ])
  },

  watch: {
    id: function () {
      this.getOneArticles(this.id)
    }
  },

  created () {
    this.getOneArticles(this.id)
  }
}
</script>

<style lang="css">
</style>
