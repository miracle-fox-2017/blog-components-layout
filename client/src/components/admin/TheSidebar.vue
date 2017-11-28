<template>
  <div class="sidebar">
    <ul class="nav nav-pills flex-column">
      <li class="nav-item">
        <router-link :to="{
          name: 'AllPosts'
        }" class="nav-link active">Blog posts</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{
          name: 'AddPost'
        }" class="nav-link">Write post</router-link>
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>
</style>
