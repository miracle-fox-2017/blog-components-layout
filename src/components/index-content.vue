<template>
  <ul class="content">
    <li v-for="(article,index) in articles">
      <div class="header">
        <span class="title">{{article.title}}</span>
      </div>
      <div class="content">
        <span class="article-preview" v-if="article.content.length > 250">{{article.content.substring(0,250)}}...</span>
        <span class="article-preview" v-else>{{article.content}}</span>
      </div>
      <div class="footer">
        <router-link :to="articleUrl(article._id)">
          <button type="button" class="btn btn-primary btn-sm">Read more</button>
        </router-link>
      </div>
    </li>
  </ul>
</template>
<script type="text/javascript">
export default{
  data:function(){
    return{
      articles:null
    }
  },
  created:function(){
    this.getAllArticle();
  },
  methods:{
    getAllArticle:function(){
      this.$axios.get("/api/article/all").then(({data})=>{
        this.articles=data.msg;
      }).catch((err)=>{
        console.log(err);
      });
    },
    articleUrl:function(targetId){
      return `/article/${targetId}`;
    }
  }
}
</script>
<style lang="scss" scoped>
  .content {
    margin: 0;
    padding: 0;
    width: 90%;
    margin: auto;
    max-width: 900px;
    margin-bottom: 50px;
    li {
      list-style: none;
      margin-top: 20px;
      .header {
        .title {
          color: #555;
          font-size: 30px;
          font-family: "Roboto",sans-serif;
        }
      }
      .content {
        margin: 0;
        width: 100%;
        .article-preview {
          font-size: 16px;
          line-height: 30px;
          font-family: "Roboto",sans-serif;
        }
      }
      .footer {
        margin-top: 5px;
      }
    }
  }
</style>
