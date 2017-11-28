<template>
  <div class="container">
    <div class="card">
      <h4 class="card-header">Post Something!</h4>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="inputTitle">Title</label>
            <input type="text" class="form-control" id="postTitle" aria-describedby="emailHelp" placeholder="Title" v-model="title">
          </div>
          <div class="form-group">
            <label for="inputContent">Description / Content</label>
            <input type="text" rows="5" class="form-control" id="postContent" placeholder="Description" v-model="content">
          </div>
          <button type="submit" class="btn btn-success" @click="newPost">POST</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Post',
    data () {
      return {
        title: '',
        idUser: '',
        content: ''
      }
    },
    methods: {
      newPost () {
        this.$axios.post(`http://localhost:3000/articles`, {
          title: this.title,
          idUser: this.idUser,
          content: this.content
        }).then((response) => {
          console.log(response.data)
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    created: function () {
      let data = localStorage.getItem('dataLogin')
      let dataParse = JSON.parse(data)
      this.idUser = dataParse.id
    }
  }
</script>

<style scoped>
.container {
  padding-left: 0;
  padding-right: 0;
  padding-top: 1em;
}
</style>
