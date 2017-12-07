<template lang="html">
  <div class="container">
    <div class="row">
      <h3>Admin Page</h3>
    </div>
    <div class="row">
      <button type="button" name="button" data-toggle="modal" data-target="#addmodal">add</button>
      <table class="table table-striped table-hover table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>no</th>
            <th>Title </th>
            <th>Description</th>
            <th>Url img</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(article, index) in articles">
            <td>{{index + 1}}</td>
            <td>{{article.title}}</td>
            <td><router-link :to="`/${article._id}`">{{article.description.substring(0, 100)}} ...</router-link></td>
            <td><a :href="article.urlimg">{{article.urlimg.substring(0, 50)}} ...</a></td>
            <td><button type="button" class="btn btn-success" data-toggle="modal" data-target="#editmodal" v-on:click="showeditarticle(article)">Edit Content</button><button type="button" class="btn btn-danger" v-on:click="deleteArticles(article)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal fade" id="editmodal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Article</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <fieldset>
                <div class="form-group">
                  <label for="exampleInputEmail1">Title</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" v-model="editArticle.title">
                </div>
                <div class="form-group">
                  <label for="exampleTextarea">Description</label>
                  <textarea class="form-control" id="exampleTextarea" rows="3" v-model="editArticle.description"></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">url image</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="url image" v-model="editArticle.urlimg">
                </div>
              </fieldset>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" v-on:click="saveedit(editArticle)" data-dismiss="modal">Save changes</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- add modal -->
    <div class="modal fade" id="addmodal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Article</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <fieldset>
                <div class="form-group">
                  <label for="exampleInputEmail1">Title</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" v-model="newArticle.title">
                </div>
                <div class="form-group">
                  <label for="exampleTextarea">Description</label>
                  <textarea class="form-control" id="exampleTextarea" rows="3" v-model="newArticle.description"></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">url image</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="url image" v-model="newArticle.urlimg">
                </div>
              </fieldset>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" v-on:click="tambah(newArticle)" data-dismiss="modal">ADD</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'Admin',
  data () {
    return {
      editArticle: {
        id: '',
        title: '',
        description: '',
        urlimg: ''
      },
      newArticle: {
        title: '',
        description: '',
        urlimg: ''
      }
    }
  },
  computed: {
    ...mapState([
      'articles'
    ])
  },
  methods: {
    ...mapActions([
      'getAllArticles',
      'deleteArticles',
      'editArticles',
      'addArticle'
    ]),

    showeditarticle (populate) {
      this.editArticle.id = populate._id
      this.editArticle.title = populate.title
      this.editArticle.description = populate.description
      this.editArticle.urlimg = populate.urlimg
    },

    saveedit (populate) {
      this.editArticles(populate)
      this.editArticle.title = ''
      this.editArticle.description = ''
      this.editArticle.urlimg = ''
    },

    tambah (populate) {
      console.log('ini dari tambah', populate)
      this.addArticle(populate)
      this.newArticle.title = ''
      this.newArticle.description = ''
      this.newArticle.urlimg = ''
    }
  },
  created () {
    this.getAllArticles()
  }
}
</script>

<style lang="css">
</style>
