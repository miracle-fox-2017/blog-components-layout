<template>
<div class="container">
   <div id="blog" class="row">           
        <leftBar :articles="articles" />

        <router-view :articles="articles" />
   </div>
</div>
</template>

<script>
import leftBar from'@/components/leftBar'
export default {
  components : {
    leftBar
  },
  data () {
    return {
      articles: []
    }
  },
  methods: {

    getAllArticle: function () {
      this.$axios.get('/article')
      .then(response => { 
        this.articles = response.data
      })
      .catch(err => {
        console.log(err);
      })
    }
  },

  created: function () {
    this.getAllArticle()
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
