<template>
  <div class="modal fade" id="add-article" role="dialog"> 
        <div class="modal-dialog modal-lg">

            <div class="modal-content">
                <div class="modal-header text-center">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title text-center">Add Buku</h4>
                </div>

                <div class="modal-body">
                    <form class="form-horizontal">

                        <div class="form-group">
                            <label class="control-label col-sm-2" for="title">Title:</label>
                                <div class="col-sm-8">
                                    <input type="text" name="title" class="form-control" id="title" placeholder="Enter title">
                                </div>
                        </div>

                        <div class="form-group">
                        <label class="control-label col-sm-2" for="description">Description :</label>
                            <div class="col-sm-8">
                                <input type="text" name="description" class="form-control" id="description" placeholder="Enter description">
                            </div>
                        </div>

                        <div class="form-group">
                        <label class="control-label col-sm-2" for="image_url">Image :</label>
                            <div class="col-sm-8">
                                <input type="text" name="image_url" class="form-control" id="image_url" placeholder="Enter image_url">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-8">
                                <button type="submit" class="btn btn-default" @click="addNewArticle">Submit</button>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddArticle',
    methods:{
        addNewArticle(){
            this.$http.post('api/articles',{
              title : document.getElementById("title").value,
              description : document.getElementById("description").value,
              image_url : document.getElementById("image_url").value
            })
            .then((dataArticle)=>{
              console.log(dataArticle)
            })
            .catch((reason)=>{
              console.log(reason)
            })
        }
    }
}
</script>

<style scoped>

</style>