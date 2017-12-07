<template>
  <div id="app">
    <div class="container">
      <header class="clearfix">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand"> <router-link :to="`/blog`">Azharie's Note</router-link></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" style="">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto" style="">
              <li class="nav-item">
                <p><router-link v-bind:to="`/blog`">Blog</router-link></p>
              </li>
              <li class="nav-item">
                <p><router-link v-bind:to="`/Posting`">Posting</router-link></p>
              </li>
              <li class="nav-item" v-if="userId">
                <p><a @click="logout">Logout</a></p>
              </li>
              <li class="nav-item" v-else>
                <p><router-link v-bind:to="`/register`">Login</router-link></p></p>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main role="main">
        <div class="jombotron">
          <router-view/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      userId: localStorage.getItem('token')
    }
  },
  methods: {
    logout: function () {
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul, li  {
  list-style: none;
  margin-right: 0.8rem;
}
p {
  font-size: 16px;
}
</style>
