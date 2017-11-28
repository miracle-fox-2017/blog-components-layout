<template>
  <div class="ui container">
    <blognavbar/>
    <blogcontent/>
  </div>
</template>

<script>
import blognavbar from '@/components/BlogNavbar'
import blogcontent from '@/components/BlogContent'

export default {
  name: 'BlogHome',
  components: {
    blognavbar
  }
}
</script>

<style>

</style>
