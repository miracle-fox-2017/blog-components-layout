<template>
  <div class="ui stackable menu">
    <div class="image item">
      <img src="../assets/logo1.png" alt="#">
    </div>
    <a class="active item">
      Home
    </a>
    <a class="item">
      About
    </a>
    <div class="right menu">
      <div class="item">
        <div class="ui icon input">
          <input placeholder="Search..." type="text">
          <i class="search link icon"></i>
        </div>
      </div>
      <router-link to="/login" class="ui item" replace>
        Login
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogNavbar'
}
</script>

<style>
  .item.navbar {
    display: block !important;
    height: 45px !important;
    margin-top: 5px;
  }

  .item.navbar:hover {
    background: #aaa !important;
  }
</style>
