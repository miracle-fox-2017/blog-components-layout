<template>
  <div class="container">
	<div class="row">
		<div class="span6" v-if="isEdit">
      <form  v-on:submit.prevent="uploadArticle">
        <div class="controls">
          <label>Title</label>
          <textarea id="message"  v-model="title"  name="title" class="span6" placeholder="Title" rows="2"></textarea>
          <label>Summary</label>
          <textarea id="message"  v-model="summary"  name="graf" class="span6" placeholder="Summary" rows="5"></textarea>
          <label>Content</label>
          <textarea id="message"  v-model="content"  name="article" class="span6" placeholder="Content" rows="5"></textarea>
          <label>Image Url</label>
          <input type="text" name="img" value="" v-model="img" placeholder="Image URL">
        </div>
        <div class="controls">
          <button id="contact-submit" type="submit" class="btn btn-primary input-medium pull-right">Send</button>
        </div>
      </form>
    </div>
    	<div class="span6" v-else>
        <h1>Edit</h1>
      <form  v-on:submit.prevent="editArticle">
        <div class="controls">
          <label>Title</label>
          <textarea id="message"  v-model="title"  name="title" class="span6" placeholder="Title" rows="2"></textarea>
          <label>Summary</label>
          <textarea id="message"  v-model="summary"  name="graf" class="span6" placeholder="Summary" rows="5"></textarea>
          <label>Content</label>
          <textarea id="message"  v-model="content"  name="article" class="span6" placeholder="Content" rows="5"></textarea>
          <label>Img Url</label>
          <input type="text" name="img" value="" v-model="img" placeholder="Image URL">
        </div>
        <div class="controls">
          <button id="contact-submit" type="submit" class="btn btn-primary input-medium pull-right">Send</button>
        </div>
      </form>
    </div>
	</div>
  <div>
    <tableArticle @edit="getArticle"/>
  </div>

</div>
</template>

<script>
  import axios from 'axios'
  import tableArticle from './tableArticle'
  export default {
    name: 'WriteNewArticle',
    components: { tableArticle },
    data () {
      return {
        content: '',
        summary: '',
        title: '',
        img: '',
        id: '',
        isEdit: true
      }
    },
    beforeCreate: function () {
      let token = localStorage.getItem('token')
      return (token) ? console.log('masuk') : this.$router.push({name: 'register'})
    },
    methods: {
      uploadArticle: function () {
        axios.post(`http://localhost:4000/api/blog`, {
          title: this.title,
          author: localStorage.getItem('userId'),
          article: this.content,
          graf: this.summary,
          img: this.img
        })
        .then(response => {
          console.log(response.data)
          this.clearField()
        })
        .catch(err => {
          console.log(err)
        })
      },
      getArticle: function (payload) {
        this.isEdit = false
        this.content = payload.article.article
        this.img = payload.article.img
        this.summary = payload.article.graf
        this.title = payload.article.title
        this.id = payload.article._id
      },
      editArticle: function () {
        axios.put(`http://localhost:4000/api/blog/${this.id}`, {
          title: this.title,
          article: this.content,
          graf: this.summary,
          img: this.img,
          author: localStorage.getItem('userId')
        })
        .then(response => {
          console.log(response.data)
          this.clearField()
        })
        .catch(err => {
          console.error(err)
        })
      },
      clearField: function () {
        this.title = ''
        this.content = ''
        this.summary = ''
        this.img = ''
        this.id = ''
      }
    }
  }
</script>
<style scoped>
textarea {
  width: 100%;
}
</style>
