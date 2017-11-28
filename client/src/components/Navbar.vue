<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Amelia's Blog</a>
    </div>

    <ul class="nav navbar-nav">
      <li>
         <router-link :to="`/`">Home</router-link>
      </li>
      <li>
       
         <router-link :to="`/admin`">Admin</router-link>
      </li>
    </ul>

    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

.navbar{
    background-color : #00b3b3;
}

.navbar-header .navbar-brand{
    color : white;
}

</style>