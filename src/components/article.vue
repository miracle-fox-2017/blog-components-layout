<template>
  <div class="article-body col-sm-12 col-md-8">
    <div class="header">
      <span class="title">{{article.title}}</span>
      <i class="author">Posted by {{article.authorId.email}}</i>
    </div>
    <div class="content">
      <span class="article">{{article.content}}</span>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script type="text/javascript">
export default{
  props:["articleId"],
  computed:{
    article(){
      const article=this.$store.state.articles.filter((article)=>{
        return article._id == this.articleId;
      })[0];
      return article;
    }
  }
}
</script>
<style lang="scss" scoped>
.article-body {
  .header {
    padding-top: 10px;
    .title {
      color: #555;
      display: block;
      font-size: 40px;
      font-weight: 300;
      font-family: "Roboto",sans-serif;
    }
    .author {
      color: #555;
      font-size: 14px;
      font-weight: bold;
      font-family: "Roboto",sans-serif;
    }
  }
  .content {
    padding-top: 10px;
    .article {
      font-size: 18px;
      line-height: 35px;
      font-family: "Roboto",sans-serif;
    }
  }
  .footer {}
}
</style>
