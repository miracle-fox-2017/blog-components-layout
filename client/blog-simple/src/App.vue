
<template>
  <div id="app">
    <kepala/>
    <router-view/>
  </div>
</template>

<script>
import kepala from '@/components/kepala'
export default {
  name: 'app',
  components: {
    kepala
  }
}
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
