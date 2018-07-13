<template>
  <div class="ui container">
    <BlogNavbar/>
    <router-view/>
  </div>
</template>

<script>
import BlogNavbar from '@/components/BlogNavbar'
export default {
  components: {
    BlogNavbar
  },
  name: 'BlogHome'
}
</script>

<style>

</style>
