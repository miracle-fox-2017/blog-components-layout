<template>
  <div class="panel panel-default">
  <div class="panel-heading" v-text="article.title"></div>
  <div class="panel-body" v-text="article.textPost"></div>
</div>
</template>
<script>
  export default {
    props: ['articles', 'articleid'],
    data () {
      return {
        article: {}
      }
    },
    methods: {
      getDetailItem (articleid) {
        let idx = this.articles.findIndex(element => {
          return element._id === articleid
        })

        this.article = this.articles[idx]
      }
    },
    mounted () {
      this.getDetailItem(this.articleid)
    },
    watch: {
      articleid (newId) {
        this.getDetailItem(newId)
      }
    }
  }
</script>