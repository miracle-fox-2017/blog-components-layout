<template>
    <div class="container">
        <addArticle :articles="articles" @update-article="updateArticle"/>
<!--           <div id="blog" class="row">
            <div class="col-md-2 pull-right"> -->
              <!-- <showList :articles="articles"/>    -->
<!--             </div>           
          </div> -->
        <router-view :articles="articles" @update-article="updateArticle"/>  
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
      if(payload.deleteArticle){

        this.articles.forEach((article, index) => {
          if(article._id == payload.deleteArticle._id){
            this.articles.splice(index,1)
            this.getAllArticles();
          }
        })

      }

      if(payload.newData){
        this.articles.forEach((article, index) => {
          if(article._id == payload.oldData._id){
            this.articles.splice(index,1,payload.newData)
            this.getAllArticles();
          }
        })
      }


      if(payload.addArticle){
        this.articles.push(payload.addArticle);
        this.getAllArticles();
      }
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
