<template>
<div class="container">
        <div class="col-md-offset-2">
           <h1> {{ article.title }} </h1>
           <article><p>{{ article.desc }}</p></article>
           <a class="btn btn-blog pull-right marginBottom10" href="#">READ MORE</a> 
           <div class="col-md-12 gap10"></div>
        </div>
</div>        
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      article: {}
    }  
  },
  methods: {
    getArticle (id) {
      this.$axios.get(`/article/${id}`)
      .then(response => {
        this.article = response.data
        console.log("DETAILL", this.article)
      })
      .catch((err) => {
        console.log(err)
      })
    }    
  },
  mounted () {
    this.getArticle(this.id)
  },  
  watch: {
    id (newId) {
      this.getArticle(newId)
    }
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
