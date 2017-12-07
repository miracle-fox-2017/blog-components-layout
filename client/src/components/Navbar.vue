<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/article" > Blog Pak Haji</router-link>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Add New Article</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navbarpakhaji'
  }
</script>