<template>
  <div class="row">
    <div class="ui segment column">
      <img class="ui fluid image" src="https://i.pinimg.com/originals/81/2b/1a/812b1a22fd978f6d7826028d2bdcfaf5.jpg">
    </div>
    <div class="row">
      <div class="ui grid segment">
        <div class="eleven wide column">
          <router-view :articles="articles"/>
          <!-- <blogshortarticle v-for="(article,i) in articles" :key="i" :article="article"></blogshortarticle> -->
        </div>
        <div class="five wide column large screen only">
          <blogsidebar :articles="articles"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
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
