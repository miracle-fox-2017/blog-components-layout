<template>
  <article class="ui celled equal width grid">
    <div class="four wide column">
      <img src="src/assets/logo.png" alt="">
    </div>
    <div class="column">
      <h3>{{article.title}}</h3>
      <p>{{article.content}}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: ['article'],
  name: 'MainContent',
  data () {
    return {
      msg: 'Welcome World!',
      // dataArticle: ''
    }
  }
  // methods: {
    // test () {
    //   dataArticle = this.article
    // }
  // }
}
</script>

<style>
  img {
    width: 175px
  }
</style>
