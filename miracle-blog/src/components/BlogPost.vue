<template>
  <div>
    <main>
      <aside class="sidebar">
        <div v-for="post in posts">
          <h2>{{ post.title }}</h2>
          <p><router-link v-bind:to="`/blog/article/${post._id}`">Read More</router-link></p>
        </div>
      </aside>
      <div class="content">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'BlogPost',
    data () {
      return {
        posts: [],
        errors: []
      }
    },
    created: function () {
      axios.get(`http://localhost:4000/api/blog`)
      .then(response => {
        console.log(response)
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
</script>
