<template>
  <div class="container">
	<div class="row">
		<div class="span6">
      <form  v-on:submit.prevent="uploadArticle">
        <div class="controls">
          <textarea id="message"  v-model="title"  name="title" class="span6" placeholder="Title" rows="2"></textarea>
          <textarea id="message"  v-model="summary"  name="graf" class="span6" placeholder="Summary" rows="5"></textarea>
          <textarea id="message"  v-model="content"  name="article" class="span6" placeholder="Content" rows="5"></textarea>
          <input type="text" name="img" value="" v-model="img" placeholder="Image URL">
        </div>
        <div class="controls">
          <button id="contact-submit" type="submit" class="btn btn-primary input-medium pull-right">Send</button>
        </div>
      </form>
    </div>
	</div>
  <div>
    <tableArticle/>
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
        img: ''
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
          this.title = ''
          this.article = ''
          this.graf = ''
          this.img = ''
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>
<style scoped>
textarea {
  width: 100%;
}
</style>
