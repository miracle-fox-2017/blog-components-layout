<template>
<div class="container">
        <div class="col-md-offset-2"  v-for="article in articles">
           <h1> {{ article.title }} </h1>
           <article><p>{{ article.desc }}</p></article>
           <div class="col-md-12 gap10"></div>
        </div>
</div>        
</template>

<script>
export default {
  props: ['articles'],
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
