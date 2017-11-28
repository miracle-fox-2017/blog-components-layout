<template>
  <div class="ui container">
    <blogadminnavbar/>
    <div class="row">
      <router-view/>
    </div>
  </div>
</template>

<script>
import blogadminnavbar from '@/components/BlogAdminNavbar'

export default {
  name: 'BlogAdminDashboard',
  components: {
    blogadminnavbar
  }
}
</script>

<style>

</style>
