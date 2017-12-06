<template>
  <div class="container">

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/"> 
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </router-link >  
            </li>
            <li class="nav-item">
              <router-link to="/blog">
                <a class="nav-link" href="#">Blog</a>
              </router-link>  
            </li>
            <li class="nav-item pull-right">
              <router-link to="/admin">
                <a class="nav-link" href="#">Admin</a>
              </router-link>  
            </li>
          </ul>
        </div>
        </nav>      
</div>
</template>

<script>
export default {
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
  font-size: 15px;
  color: #42b983;
}
</style>
