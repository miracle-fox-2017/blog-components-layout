<template>
  <div class="sidebar">
    <router-link :to="`/main_content`"><p>Home</p></router-link>
    <div v-for="blog in blogs">
      <router-link :to="`/main_content/${blog._id}`">
        <p>{{blog.title}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
    props: ['blogs']
  }
</script>

<style scoped>
.sidebar {
  background-color: #eee;
  border-radius: 5px;
  text-align: center
}
.sidebar li {
  list-style: none
}
</style>
