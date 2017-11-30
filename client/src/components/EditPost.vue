<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Edit Post</div>
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
          <button type="submit" class="btn btn-success" @click="postEdit">POST</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EditPost',
    props: ['blogs', 'fromDetail'],
    data () {
      return {
        title: this.fromDetail.title,
        idUser: '',
        content: this.fromDetail.content,
        editedPost: {}
      }
    },
    methods: {
      postEdit () {
        let data = localStorage.getItem('dataLogin')
        let dataParse = JSON.parse(data)
        this.idUser = dataParse.id
        this.$axios.put(`http://localhost:3000/articles/${this.idUser}/${this.fromDetail._id}`, {
          title: this.title,
          content: this.content
        }).then((response) => {
          this.editedPost = response.data
          this.$emit('send-data-edit', {
            list: this.editedPost
          })
        })
      }
    }
  }
</script>
