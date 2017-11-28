<template>
  <div class="admin">
    <navbar/>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
        <sidebar/>
        </nav>
        <div class=" col-sm-6 col-md-8 col-sm-offset-2 col-md-offset-2">
          <router-view/>
          <!-- <UserPost v-for="(article, key) in articles" :key="key" :article="article">  
          </UserPost> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/admin/TheNavbarAdmin'
import sidebar from '@/components/admin/TheSidebar'
export default {
  components: {
    navbar: navbar,
    sidebar: sidebar
  }
}
</script>

<style>
.whitespace {
  margin: 16px;
}
</style>
