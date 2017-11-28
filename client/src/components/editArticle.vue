<template>
<div class="container">
      <!-- <div class="col-md-offset-0"> -->

 <!--        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add new Article </button> -->

          <!-- Modal -->
    <!--       <div class="modal fade" id="editModal" role="dialog">
            <div class="modal-dialog"> -->
            
              <!-- Modal content-->
  <!--             <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 class="modal-title">Add new Article</h4>
                </div> -->
                <form>                  
                  <table class="col-md-offset-4">
                      <tr>                        
                          <td>Author</td>   
                      </tr>
                      <tr>
                          <td> <input v-model="author" type="text" name="author" :placeholder="article.author"> </td>                          
                      </tr>
                      <tr>
                          <td>Title</td>
                      </tr>
                      <tr> 
                          <td><input v-model="title" type="text" name="title" :placeholder="article.title"> </td>
                      </tr>  
                      <tr>
                          <td>Desc</td> 
                      </tr>
                      <tr>
                          <td> <textarea v-model="desc" :placeholder="article.desc"> </textarea> </td>
                      </tr>
                      <tr>
                          <td>Year</td> 
                      </tr>
                      <tr>
                         <td> <input v-model="year" type="text" name="year" :placeholder="article.year"> </td>
                      </tr>  
                      <tr>
                          <td>URL Link</td> 
                      </tr>  
                      <tr>
                          <td> <input v-model="link" type="text" name="link" :placeholder="article.link"> </td> 
                      </tr>                                           
                      <div class="whitespace">                    
                      </div>                    
                      <tr>
                        <td> <router-link to="/admin"> <button @click="editArticle" type="submit" value="submit">submit</button> </router-link> </td>
                      </tr>                                                                             
                  </table>                                                  
                </form>                                                            
<!--                 <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
              
            </div>
          </div>

      </div> -->
</div>        
</template>

<script>
export default {
  props: ['articles','id'],
  data () {
    return {
      article: {},
      author: '',
      title: '',
      desc: '',
      year: '',
      link: ''
    }
  },
  methods: {
    editArticle : function() {
      this.$axios.put(`/edit/${this.id}`, {
        'author' : this.author,
        'title' : this.title,
        'desc' : this.desc,
        'year' : this.year,
        'link' : this.link
      })
      .then(response => {
        this.$emit('update-article', {
          oldData : response.oldData,
          newData : response.newData
        })
      })
      .catch(err => {
        console.log(err);
      })
    },

    getArticle (id) {
      this.$axios.get(`/article/${id}`)
      .then(response => {
        this.article = response.data
      })
      .catch((err) => {
        console.log(err)
      })
    },

  },
  mounted () {
    this.getArticle(this.id)
  },  
  watch: {
    id (newId) {
      this.getArticle(newId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
