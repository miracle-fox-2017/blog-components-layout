<template>
  <div class="col-md-9">
    <div class="article">
      <h2>{{ childarticles[pos].title }}</h2>
      <p>{{ childarticles[pos].article }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['childarticles'],
  name: 'Article',
  data () {
    return {
      msg: 'Article',
      pos: ''
    }
  },
  methods: {
    getArticle () {
      let temp = this.$route.params.id
      let articles = this.childarticles
      let i = articles.findIndex(function (e) {
        return (e._id === temp)
      })
      this.pos = i
    }
  },
  watch: {
    '$route' (to, from) {
      // react to route changes...
      this.getArticle()
    }
  },
  created () {
    this.getArticle()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
