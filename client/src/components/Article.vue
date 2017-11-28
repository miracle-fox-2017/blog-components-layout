<template>
  <div class="col-md-9">
    <div class="article">
      <h2>{{ childarticles[$route.params.id-1].title }}</h2>
      <h6>dd:mm:yy hh:mm:ss</h6>
      <p>{{ childarticles[$route.params.id-1].content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['childarticles'],
  name: 'Article',
  data () {
    return {
      msg: 'Article'
    }
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
