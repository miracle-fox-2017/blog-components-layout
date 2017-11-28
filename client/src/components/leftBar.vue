<template>
    <div class="col-md-2" >
      <ul  v-for="article in articles" >
          <li> 
              <router-link :to="`/blog/${article._id}`">{{ article.title }}</router-link>          
          </li>
      </ul> 
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
