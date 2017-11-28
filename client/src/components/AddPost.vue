<template>
  <div class="">
    <button class="btn btn-primary btn-xs" data-toggle="modal" data-target="#add" ><span class="glyphicon glyphicon-plus"></span> Add New Post</button>
    
    <!-- Modal -->
    <div id="add" class="modal fade" role="dialog">
      <div class="modal-dialog">
        
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Add Post</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <fieldset>
                <div class="form-group">
                  <label for="title" class="col-lg-2 control-label">Title</label>
                  <div class="col-lg-10">
                    <input class="form-control" id="title" placeholder="Title" type="text">
                  </div>
                </div>
                <div class="form-group">
                  <label for="textArea" class="col-lg-2 control-label">Textarea</label>
                  <div class="col-lg-10">
                    <textarea class="form-control" rows="3" id="textArea"></textarea>
                    <span class="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
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
export default {
  name: 'Addpost',
  data () {
    return {
      msg: 'Admin Add Post'
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
