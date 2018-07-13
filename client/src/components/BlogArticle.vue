<template>
  <div class="ui segment">
    <div class="ui header blue">
      <h1>{{article.title}}</h1>
    </div>
    <div class="ui divider"></div>
    <div class="content">
      <span v-html="article.content"></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: {}
    }
  },
  props: ['id'],
  methods: {
    getOneArticle (id) {
      this.$http.get('/articles/' + id)
      .then(({data}) => {
        this.article = data
      })
      .catch((err) => console.log(err))
    }
  },
  mounted () {
    this.getOneArticle(this.id)
  },
  watch: {
    id (newId) {
      this.getOneArticle(newId)
    }
  }
}
</script>

<style>
  .article {
    padding: 3em !important;
    text-align: justify;
  }
</style>
