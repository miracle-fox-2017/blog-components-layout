<template>
  <div class="">
    <button class="btn btn-primary btn-xs" data-toggle="modal" data-target="#add" ><span class="glyphicon glyphicon-plus"></span> Add New Post</button>
    
    <!-- Modal -->
    <div id="add" class="modal fade" role="dialog" ref="add">
      <div class="modal-dialog">
        
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Add Post</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal" v-on:submit.prevent="postArticle">
              <fieldset>
                <div class="form-group">
                  <label for="title" class="col-lg-2 control-label">Title</label>
                  <div class="col-lg-10">
                    <input v-model="title" class="form-control" id="title" placeholder="Title" type="text">
                  </div>
                </div>
                <div class="form-group">
                  <label for="image" class="col-lg-2 control-label">imageurl</label>
                  <div class="col-lg-10">
                    <input v-model="image" class="form-control" id="image" placeholder="imageurl" type="text">
                  </div>
                </div>
                <div class="form-group">
                  <label for="content" class="col-lg-2 control-label">Content</label>
                  <div class="col-lg-10">
                    <textarea v-model="content" class="form-control" rows="3" id="content"></textarea>
                  </div>
                </div>
                <div class="form-group modal-footer">
                  <div class="col-lg-10 col-lg-offset-2">
                    <button type="reset" data-dismiss="modal" class="btn btn-default">Cancel</button>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Addpost',
  data () {
    return {
      msg: 'Admin Add Post',
      title: '',
      content: '',
      image: ''
    }
  },
  methods: {
    postArticle () {
      axios.post('http://localhost:3000/api/blog', {
        title: this.title,
        article: this.content,
        image: this.image
      }, {
        headers: {'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhMWJiNGQ4ZTUwOWZmNzNkYTU3YzYzNiIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE1MTE3Njc5OTl9.3rE7sD-fCk9kWgxdXftyGfEqdNEL2lHHgen-mjkPa5U'}
      })
      .then((response) => {
        alert('Success Added')
        let obj = {
          _id: response.data.blogPost._id,
          title: response.data.blogPost.title,
          article: response.data.blogPost.article,
          image: response.data.blogPost.image
        }
        this.$emit('new-article', obj)
        this.title = ''
        this.content = ''
        this.image = ''
      })
      .catch((error) => {
        alert('UnSuccess Added')
        console.log(error)
      })
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
