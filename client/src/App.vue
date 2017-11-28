<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footers/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Navbar from '@/components/Navbar'
import Footers from '@/components/Footer'

export default {
  name: 'app',
  components: {
    Navbar,
    Footers
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
  /* margin-top: 60px; */
}
.row{
  margin-right: 0;
  margin-left: 0;
}
</style>
