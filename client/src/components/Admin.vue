<template>
    <div class="container">
        <addArticle :articles="articles" @addArticle="addArticle" @deleteArticle="deleteArticle" @update-article="updateArticle"/>
        <router-view :articles="articles" @addArticle="addArticle" @deleteArticle="deleteArticle" @update-article="updateArticle"/>  
    </div>
</div>
</template>

<script>
import addArticle from '@/components/addArticle'
import showList from '@/components/showList'
export default {
  components : {
    addArticle,
    showList
  },  
  data () {
    return {
      articles : []
    }
  },
  methods : {
    getAllArticles: function () {
      this.$axios.get('article')
      .then(result => {
        this.articles = result.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    updateArticle: function(payload) {
        this.articles.forEach((article, index) => {
          if(article._id == payload.oldData._id){
            this.articles.splice(index,1,payload.newData)
            // this.getAllArticles();
            this.$router.push({ name: 'Admin' })
          }
        })
    },

    addArticle: function(payload) {
        if(payload.addArticle){
          this.articles.push(payload.addArticle);
          this.$router.push({ name: 'Admin' })
        }
    },

    deleteArticle: function(payload) {
        this.articles.forEach((article, index) => {
          if(article._id == payload.deleteArticle._id){
            this.articles.splice(index,1)
            this.getAllArticles();
          }
        })
    }
  },
  created () {
    this.getAllArticles();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
