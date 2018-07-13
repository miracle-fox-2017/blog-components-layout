<template>
  <div class="ui stackable menu">
    <div class="image item">
      <img src="../assets/logo1.png" alt="#">
    </div>
    <router-link to="/" class="item">
      Open Blog
    </router-link>
    <div class="right menu">
      <router-link to="/admin" class="ui item">
        Admin
      </router-link>
      <router-link to="/logout" class="ui item">
        Logout
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogAdminNavbar'
}
</script>

<style>
</style>
