<template>
<div class="container">
        <div class="col-md-offset-2"  v-for="article in articles">
           <h3 class="pull-right"> {{ article.title }} 
            <router-link :to="`/admin/edit/${article._id}`"><span class="glyphicon glyphicon-edit" aria-hidden="true"> </span></router-link>  
            <router-link :to="`/admin/delete/${article._id}`"><span 
              type="button" data-toggle="modal" data-target="#editModal" 
              class="glyphicon glyphicon-remove" aria-hidden="true"></span> </router-link></h3>
           <div class="col-md-12 gap10"></div>
        </div>
</div>        
</template>

<script>
export default {
  props: ['articles'],
  methods: {

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
