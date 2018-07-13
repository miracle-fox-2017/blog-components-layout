<template>
  <div class="ui segment">
    <div class="ui header">
      Post New Article
    </div>
    <div class="ui form">
      <div class="field">
        <label>Title</label>
        <input name="title" placeholder="Title" type="text" v-model="title">
      </div>
      <div class="field">
        <label>Content</label>
        <textarea placeholder="Write something..." v-model="content"></textarea>
      </div>
      <div class="field">
        <label>Category</label>
        <input type="text" name="category" placeholder="Category" v-model="category">
      </div>
      <button class="ui primary button" @click="postArticle">Submit</button>
      <router-link to="/admin" class="ui negative button">Cancel</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogArticlePost',
  data () {
    return {
      title: '',
      content: '',
      category: ''
    }
  },
  methods: {
    postArticle () {
      var newArticle = {
        title: this.title,
        content: this.content,
        category: this.category
      }
      this.$http.post('/articles', newArticle, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({data}) => {
        this.$router.push('/admin')
      })
      .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>
