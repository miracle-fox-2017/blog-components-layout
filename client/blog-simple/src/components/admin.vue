<template>
  <div class="">
    <div class="container" id="section1">
      <div class="row">
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h2 class="sub-header">List Article</h2>
          <div class="table-responsive">
            <table class="table table-stripe">
              <tr>
                <th>title</th>
                <th>description</th>
              </tr>
              <tr v-for="(article, index) in articles">
                <td>{{article.title}}</td>
                <td>{{article.description.substring(0, 50)}}...</td>
                <td><button class="btn btn-secondary" type="button" name="button" v-on:click="deleteArticle(index, article._id)">delete</button><button class="btn btn-secondary" type="button" name="button" v-on:click="onEdit(index)" data-toggle="modal" data-target="#myModal">edit</button></td>
              </tr>
            </table>
            <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add Article</button>
          </div>
        </div>
      </div>
    </div>

    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Tambah article</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="title">title</label>
                <input type="text" class="form-control" id="title" v-model="article.title">
              </div>
              <div class="form-group">
                <label for="description">description:</label>
                <textarea class="form-control" id="description"  v-model="article.description"></textarea>
              </div>
              <div class="form-group">
                <label for="urlimg">urlimg</label>
                <input type="text" class="form-control" id="urlimg" v-model="article.urlimg">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button v-if="updating" type="submit" class="btn btn-default" v-on:click="onSubmit">Update Article</button>
            <button v-else="" type="button" name="button" v-on:click="onSubmit">Tambah Article</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>

      </div>
    </div>
  </div>
<!-- <input type="text" name="title" id="title" ref="title">
<input type="text" name="description" id="description" ref="description">
<input type="text" name="urlimg" id="urlimg" ref="urlimg">
<button type="button" name="button">editted</button> -->
</template>

<script>
export default {
  name: 'admin',

  data () {
    return {
      articles: [],
      article: {
        title: '',
        description: '',
        urlimg: ''
      },
      updating: false,
      updateIndex: 0
    }
  },

  methods: {
    getAllarticle: function () {
      this.$http.get('/api/articles')
        .then((response) => {
          this.articles = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    deleteArticle: function (index, id) {
      console.log(id)
      this.$http.delete('api/articles/delete/' + id)
      .then((response) => {
        this.articles.splice(index, 1)
      })
    },

    createarticle: function () {
      this.$http.post('/user', {
        title: this.$refs.article_title.value,
        description: this.$refs.article_description.value,
        urlimg: this.$refs.article_urlimg.value
      }).then((response) => {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    },

    onSubmit: function () {
      if (this.updating) {
        this.onUpdate()
      } else {
        this.$http.post('api/articles', {
          title: this.article.title,
          description: this.article.description,
          urlimg: this.article.urlimg
        }).then(function (response) {
          console.log(response)
        }).catch(function (error) {
          console.log(error)
        })
        this.articles.push(this.article)
        this.article = {
          title: '',
          description: '',
          urlimg: ''
        }
      }
    },

    onUpdate: function () {
      this.updating = false
      this.$http({
        method: 'put',
        url: 'api/articles/edit/' + this.article._id,
        data: {
          title: this.article.title,
          description: this.article.description,
          urlimg: this.article.urlimg
        }
      })

      this.articles[this.updateIndex] = this.article

      this.article = {
        title: '',
        description: '',
        urlimg: ''
      }
    },

    onEdit: function (index) {
      this.updating = true
      this.updateIndex = index
      this.article = this.articles[index]
    }
  },

  created: function () {
    this.getAllarticle()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button{
    margin-right: 20px;
  }
</style>
