<template>
  <div class="ui container">
    <blognavbar/>
    <router-view/>
  </div>
</template>

<script>
import blognavbar from '@/components/BlogNavbar'
import blogcontent from '@/components/BlogContent'

export default {
  name: 'BlogHome',
  components: {
    blognavbar,
    blogcontent
  }
}
</script>

<style>

</style>
