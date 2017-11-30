<template>
  <div class="main-content">
    <!-- Rendering blog posts -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5" v-for="(blog, index) in blogs">
          <div class="card bg-dark text-white">
            <div class="card-img-overlay">
              <router-link :to="`/main_content/${blog._id}`">
                <h4 class="card-title">{{blog.title}}</h4>
              </router-link>
              <p class="card-text">{{blog.content}}</p>
              <p class="card-text">{{blog.createdAt}}</p>
              <p class="card-text">{{blog.user.first_name}}</p>
              <button class="btn btn-danger" type="button" name="button" @click="dataDelete(blog,index)">Delete this post</button>
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
  props: ['blogs'],
  methods: {
    dataDelete (blog, index) {
      this.$emit('sendDataDelete', {
        list: blog,
        idx: index
      })
    }
  }
}
</script>

<style scoped>
.card {
  height: 400px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 2em;
}
</style>
