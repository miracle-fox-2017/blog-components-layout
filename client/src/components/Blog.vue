<template>
  <div class="blog">
    <div class="row">
      <sidebar :childarticles="articles" />
      <router-view :childarticles="articles" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'Blog',
  data () {
    return {
      msg: 'Hello Blog',
      articles: []
    }
  },
  components: {
    Sidebar
  },
  created () {
    axios.get('http://localhost:3000/api/blog')
    .then(result => {
      this.articles = result.data.blogPost
    })
    .catch(err => {
      console.log(err)
    })
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
