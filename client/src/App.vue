<template>
  <div id="app">
    <main-header></main-header>
    <router-view/>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';


export default {
  name: 'app',
  components: {
    MainHeader,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fafafa;
}

a {
  color:  crimson;
}

a:hover {
  color: #333;
  text-decoration: none;
}

.flat-list {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.flat-list li {
  margin-bottom: 0.8rem;
}

.no-mt{
  margin-top: 0;
}

.no-mb{
  margin-bottom: 0;
}

.u-full-width {
  width: 100%;
}

.small-mb {
  margin-bottom: 2rem;
}

</style>
