<template>
  <div class="">
    <!-- <button class="btn btn-link btn-xs" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button>
     -->
    <!-- Modal -->
    <div id="edit" class="modal fade" role="dialog">
      <div class="modal-dialog">
        
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Edit Post</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal" v-on:submit.prevent="postArticle">
              <fieldset>
                <div class="form-group">
                  <label for="title" class="col-lg-2 control-label">Title</label>
                  <div class="col-lg-10">
                    <input v-model="editarticle.title" class="form-control" id="title" placeholder="Title" type="text">
                  </div>
                </div>
                <div class="form-group">
                  <label for="image" class="col-lg-2 control-label">Image Link</label>
                  <div class="col-lg-10">
                    <input v-model="editarticle.image" class="form-control" id="image" placeholder="Image Link" type="text">
                  </div>
                </div>
                <div class="form-group">
                  <label for="textArea" class="col-lg-2 control-label">Content</label>
                  <div class="col-lg-10">
                    <textarea v-model="editarticle.article" class="form-control" rows="3" id="textArea">{{editarticle.article}}</textarea>
                  </div>
                </div>
                <div class="form-group modal-footer">
                  <div class="col-lg-10 col-lg-offset-2">
                    <button type="reset" data-dismiss="modal" class="btn btn-default">Cancel</button>
                    <button type="submit" @click="postArticle" class="btn btn-primary">Submit</button>
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
  props: ['editarticle'],
  name: 'Editpost',
  data () {
    return {
      msg: 'Admin Edit Post'
    }
  },
  methods: {
    postArticle () {
      axios.put('http://vps.masfaris.com:3003/api/blog/' + this.editarticle._id, {
        title: this.editarticle.title,
        image: this.editarticle.image,
        article: this.editarticle.article
      }, {
        headers: {'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhMWJiNGQ4ZTUwOWZmNzNkYTU3YzYzNiIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE1MTE3Njc5OTl9.3rE7sD-fCk9kWgxdXftyGfEqdNEL2lHHgen-mjkPa5U'}
      })
      .then((response) => {
        alert('Success Edit')
        let obj = {
          _id: response.data.newBlogPost._id,
          title: response.data.newBlogPost.title,
          article: response.data.newBlogPost.article
        }
        this.$emit('new-article', obj)
      })
      .catch((error) => {
        alert('UnSuccess Edit')
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
