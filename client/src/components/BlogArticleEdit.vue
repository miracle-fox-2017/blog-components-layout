<template>
  <div class="ui segment">
    <div class="ui header">
      Edit Article
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
      <button class="ui primary button" @click="editArticle">Submit</button>
      <router-link to="/admin" class="ui negative button">Cancel</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogArticlePost',
  props: ['id'],
  data () {
    return {
      title: '',
      content: '',
      category: ''
    }
  },
  methods: {
    getOneArticle (id) {
      this.$http.get('/articles/' + id)
      .then(({data}) => {
        this.title = data.title
        this.content = data.content
        this.category = data.category
      })
      .catch((err) => console.log(err))
    },
    editArticle () {
      var newData = {
        title: this.title,
        content: this.content,
        category: this.category
      }
      this.$http.put('/articles/' + this.id, newData, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({data}) => {
        this.$router.push('/admin')
      })
      .catch(err => console.log(err))
    }
  },
  mounted () {
    console.log(this.id)
    this.getOneArticle(this.id)
  },
  watch: {
    id (newId) {
      this.getOneArticle(newId)
    }
  }
}
</script>

<style>

</style>
