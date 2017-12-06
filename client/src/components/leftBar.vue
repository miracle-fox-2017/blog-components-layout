<template>
    <div class="col-md-2" >
     <!--  <ul  v-for="article in articles" > -->

      <ul class="list-group" v-for="article in articles" >
        <router-link :to="`/blog/${article._id}`">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            {{ article.title }}
          </li>
      </router-link>
      </ul>        
<!--           <li> 
              <router-link :to="`/blog/${article._id}`">{{ article.title }}</router-link>          
          </li> -->
      <!-- </ul>  -->
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
  font-size: 10px;
}
</style>
