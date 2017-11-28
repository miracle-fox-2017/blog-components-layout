<template>
  <div class="main-content">
    <!-- Rendering blog posts -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5" v-for="blog in blogs">
          <div class="card bg-dark text-white">
            <div class="card-img-overlay">
              <router-link :to="`/main_content/${blog._id}`">
                <h4 class="card-title">{{blog.title}}</h4>
              </router-link>
              <p class="card-text">{{blog.content}}</p>
              <p class="card-text">{{blog.createdAt}}</p>
              <p class="card-text">{{blog.user.first_name}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: ['blogs']
}
</script>

<style scoped>
.card {
  height: 400px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.container-fluid {
  padding-bottom: 2em
}
</style>
