<template>
  <div class="write-post">
    <form>
      <div class="input-group">
        <label for="Post Title">Title</label>
        <input type="text" v-model="title">
      </div>
      <div class="input-group">
        <label for="Post Body">Post</label>
        <input type="textarea" v-model="post">
      </div>
      <div class="input-group">
        <div class="btn btn-primary" @click="createPost">Post</div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      post: ''
    }
  },
  methods: {
    createPost () {
      this.$http.post('posts/', {
        title: this.title,
        post: this.post
      })
      .then(success => console.log(success))
      .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>
