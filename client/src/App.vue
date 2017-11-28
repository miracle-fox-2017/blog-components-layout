<template>
  <div>
    <navbar/>
    <div id="app">
      <div class="container">
        <router-view/>
        
      </div>
      
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
img.header {
  text-align: center;
  margin-top: -60px;
}
</style>
