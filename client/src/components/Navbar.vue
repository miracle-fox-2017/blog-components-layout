<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">My Blog</a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
        <ul class="nav navbar-nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/admin">Admin</router-link></li>
          <li><a href='#' @click="logoutNow">Log out</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      islogin: false
    }
  },
  methods: {
    checkLogin: function () {
      if (localStorage.getItem('name')) {
        this.islogin = true
      } else {
        this.islogin = false
        localStorage.removeItem('name')
      }
    },
    logoutNow: function () {
      localStorage.removeItem('name')
      this.$router.push('/')
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
