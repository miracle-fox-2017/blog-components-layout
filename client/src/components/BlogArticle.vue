<template>
  <div class="row">
    <div class="ui grid segment stackable">
      <div class="eleven wide column article">
        <div class="ui header">
          <h1>{{article.title}}</h1>
        </div>
        <div class="ui divider"></div>
        <div class="content">
          <span v-html="article.content"></span>
        </div>
      </div>
      <div class="five wide column large screen only">
        <blogsidebar :articles="articles"/>
      </div>
    </div>
  </div>
</template>

<script>
import blogsidebar from '@/components/BlogSidebar'

export default {
  components: {
    blogsidebar
  },
  data () {
    return {
      article: {}
    }
  },
  props: ['id', 'articles'],
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
  }
</style>
