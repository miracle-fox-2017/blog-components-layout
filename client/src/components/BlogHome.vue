<template>
  <div class="ui container">
    <blognavbar/>
    <router-view :articles="articles"/>
  </div>
</template>

<script>
import blogcontent from '@/components/BlogContent'
import blognavbar from '@/components/BlogNavbar'

export default {
  name: 'BlogHome',
  components: {
    blogcontent,
    blognavbar
  },
  data () {
    return {
      articles: {}
    }
  },
  methods: {
    getAllArticle () {
      this.$http.get('/articles')
      .then(({data}) => {
        this.articles = data
      })
      .catch((err) => console.log(err))
    }
  },
  mounted () {
    this.getAllArticle()
  }
}
</script>

<style>

</style>
