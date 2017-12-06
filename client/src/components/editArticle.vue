<template>
<div class="container">
  <form @submit.prevent="editArticle">
    <h2>{{ article.title }}</h2>
    <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="author">Author</label>
            <input v-model="author" type="text" name="author" :placeholder="article.author" class="form-control" 
            id="author">
          </div>
        </div>
      <!--  col-md-6   -->

        <div class="col-md-6">
          <div class="form-group">
            <label for="title">Title</label>
            <input  v-model="title" type="text" name="title" :placeholder="article.title" class="form-control" 
            id="title">
          </div>
        </div>
      <!--  col-md-6   -->
    </div>

      <!--  col-md-6   -->
    <div class="row">  
      <div class="col-md-6">
        <div class="form-group">
          <label for="year">Year Publish </label>
          <input v-model="year" type="text" name="year" :placeholder="article.year" class="form-control" 
          id="year">
        </div>

      </div>

      <!--  col-md-6   -->

      <div class="col-md-6">
        <div class="form-group">
          <label for="link">Url Link </label>
          <input v-model="link" type="text" name="link" :placeholder="article.link" class="form-control" 
          id="link">
        </div>

      </div>      
    </div>
      
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="desc">Description</label>
          <textarea v-model="desc" :placeholder="article.desc" class="form-control" id="desc"> </textarea>
        </div>

      </div>
    </div>  
    <!--  row   -->

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div> 
               <!--  <form>                  
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
                </form>           -->                                                  

<!-- </div>   -->      
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
          oldData : response.data.oldArticle,
          newData : response.data.newArticle
        })
      })
      .catch(err => {
        console.log(err);
      })
    },

    getArticle (id) {
      this.$axios.get(`/article/${id}`)
      .then(response => {
        this.article = response.data[0]
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
