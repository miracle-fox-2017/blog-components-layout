<template>
  <div class="container">
	<div class="row">
		<div class="span6">
            <form>
                <div class="controls" v-on:submit.prevent="uploadArticle">
                  <textarea id="message"  v-model="title"  name="title" class="span6" placeholder="Title" rows="2"></textarea>
                  <textarea id="message"  v-model="summary"  name="graf" class="span6" placeholder="Summary" rows="5"></textarea>
                  <textarea id="message"  v-model="content"  name="article" class="span6" placeholder="Content" rows="5"></textarea>
                  <input type="text" name="img" value="" v-model="img" placeholder="Image URL">
                  <input type="text" name="author" v-model="author" value="" placeholder="Author">
                </div>
                <div class="controls">

                    <button id="contact-submit" type="submit" @click="uploadArticle" class="btn btn-primary input-medium pull-right">Send</button>
                </div>
            </form>
        </div>
	</div>

</div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Posting',
    data () {
      return {
        content: '',
        summary: '',
        title: '',
        img: '',
        author: ''
      }
    },
    methods: {
      uploadArticle: function () {
        axios.post(`http://localhost:4000/api/blog`, {
          title: this.title,
          author: this.author,
          article: this.content,
          graf: this.graf,
          img: this.img
        })
        .then(response => {
          console.log(response.data)
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
