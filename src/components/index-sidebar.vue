<template>
  <div class="col-sm-12 col-md-4 latest-article">
    <span class="title">Latest Post</span>
    <ul class="article-list">
      <li v-for="(article,index) in latestFive">
        <router-link :to="articleUrl(article._id)">{{article.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.latest-article {
  padding: 5px;
  margin-top: 20px;
  box-sizing: border-box;
  border: 1px solid #AAA;
  .title {
    color: #FFF;
    padding: 10px;
    display: block;
    font-size: 25px;
    font-weight: 300;
    background-color: #AAA;
    box-sizing: border-box;
    font-family: "Roboto",sans-serif;
  }
  .article-list {
    margin: 0;
    padding: 10px;
    list-style: none;
    box-sizing: border-box;
    a {
      display: block;
      font-size: 20px;
      text-decoration: none;
      padding: 10px 0 10px 0;
      box-sizing: border-box;
      font-family: "Roboto",sans-serif;
    }
  }
}
</style>
