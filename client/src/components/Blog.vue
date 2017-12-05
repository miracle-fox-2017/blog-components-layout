<template>
  <main class="ui container">
    <div class="ui equal width celled stackable grid">
      <sidebar></sidebar>
      <section class="twelve wide column">
        <main-content v-for="(article, index) in articles" :key="index" :article="article"></main-content>
      </section>
    </div>
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import MainContent from '@/components/MainContent'
export default {
  name: 'Blog',
  components: {
    Sidebar,
    MainContent
  },
  data () {
    return {
      articles: []
    }
  },
  created () {
    this.$http.get('/articles')
    .then(articles => {
      console.log(articles.data)
      this.articles = articles.data
      // console.log({articles})
    })
    .catch(err => console.log(err))
  }
}
</script>

<style>

</style>
