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
                    <input class="form-control" id="title" placeholder="Title" type="text" :value="editarticle.title">
                  </div>
                </div>
                <div class="form-group">
                  <label for="textArea" class="col-lg-2 control-label">Content</label>
                  <div class="col-lg-10">
                    <textarea class="form-control" rows="3" id="textArea">{{editarticle.content}}</textarea>
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
  props: ['editarticle'],
  name: 'Editpost',
  data () {
    return {
      msg: 'Admin Edit Post'
    }
  },
  methods: {
    postArticle () {
      axios.put('http://localhost:3000/articles/' + this.editarticle.id, {
        title: this.title,
        content: this.content
      })
      .then((response) => {
        alert('Success Edit')
        let obj = {
          id: response.data.id,
          title: response.data.title,
          content: response.data.content
        }
        this.$emit('new-article', obj)
      })
      .catch((error) => {
        alert('UnSuccess Edit')
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
