<template>
<div class="container">
        <h1>{{ article.title }} Has Been Remove this Article </h1>
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
        this.$emit('deleteArticle', {
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
