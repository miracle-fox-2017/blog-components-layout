<template>
  <div class="ui stackable menu">
    <div class="image item">
      <img src="../assets/logo1.png" alt="#">
    </div>
    <router-link to="/" class="active item">
      Home
    </router-link>
    <a class="item">
      About
    </a>
    <div class="right menu" v-if="!token">
      <div class="item">
        <div class="ui icon input">
          <input placeholder="Search..." type="text">
          <i class="search link icon"></i>
        </div>
      </div>
      <router-link to="/login" class="ui item">
        Login
      </router-link>
    </div>
    <div class="right menu" v-else>
      <div class="item">
        <div class="ui icon input">
          <input placeholder="Search..." type="text">
          <i class="search link icon"></i>
        </div>
      </div>
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
  name: 'BlogNavbar',
  data () {
    return {
      token: localStorage.getItem('token')
    }
  }
}
</script>

<style>
</style>
