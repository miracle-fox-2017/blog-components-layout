<template>
<div class="container">
        <h1>Has Been Remove this Article </h1>
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
  props: ['articles','id'],
  data () {
    return {
      article: {}
    }  
  },
  methods: {
    deleteArticle (id) {
      this.$axios.delete(`/article/${id}`)
      .then(response => {
        this.article = response.data
        this.$emit('update-article', {
          deleteArticle : response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
    }    
  },
  mounted () {
    this.deleteArticle(this.id)
  },  
  watch: {
    id (newId) {
      this.deleteArticle(newId)
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
