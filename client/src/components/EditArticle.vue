<template>
  <div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Edit Data</h4>
        </div>
        <form class="form-horizontal">
          <div class="form-group">
            <label class="control-label col-sm-2" for="title">Title:</label>
            <div class="col-sm-8">
              <input type="text" v-model="articleDetail.title" class="form-control" placeholder="Enter title">
            </div>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-2" for="description">Description:</label>
            <div class="col-sm-8">
              <input type="text" v-model="articleDetail.description" class="form-control" placeholder="Enter description">
            </div>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-2" for="image_url">Image:</label>
            <div class="col-sm-8">
              <input type="text" v-model="articleDetail.image_url" class="form-control" placeholder="Enter image_url">
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-8">
              <button type="button" class="btn btn-default" data-dismiss="modal" @click="updateData">Submit</button>
            </div>
          </div>

        </form>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    props: ['articleDetail'],
    name: 'EditAdmin',
    methods: {
      updateData() {
        this.$http.put(`api/articles/${this.articleDetail.id}`, {
          title: this.articleDetail.title,
          description: this.articleDetail.description,
          image_url: this.articleDetail.image_url
        }).then((dataArticle) => {
           this.$emit('update-article', dataArticle.data)
        }).catch((reason) => {
          console.log(reason)
        })
      }
    }
  }

</script>

<style>

</style>