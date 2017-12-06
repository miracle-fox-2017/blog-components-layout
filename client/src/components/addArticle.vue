<template>
<div class="container">

      <div class="col-md-offset-0">
        <button type="button" data-toggle="modal" data-target="#myModal" class="btn btn-success">Add Article</button>
            <div class="modal" id="myModal">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                  <form>
                    <fieldset>
                      <legend>Legend</legend>
                      <div class="form-group">
                        <label for="Author"> Author </label>
                        <input v-model="author" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Author">
                      </div>
                      <div class="form-group">
                        <label for="title"> Title </label>
                        <input v-model="title" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title">
                      </div>
                      <div class="form-group">
                        <label for="desc"> Desc </label>
                        <input v-model="desc" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter desc">
                      </div>
                      <div class="form-group">
                        <label for="year"> Year </label>
                        <input v-model="year" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter year">
                      </div> 
                      <div class="form-group">
                        <label for="link"> link </label>
                        <input v-model="link" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter link">
                      </div>
                    </fieldset>
                  </form>                    
                  </div>
                  <div class="modal-footer">
                    <router-link to="/">
                      <button @click.prevent ="createArticle" data-dismiss="modal" type="button" class="btn btn-primary">Save changes</button>
                    </router-link>  
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>            
      </div>
</div>        
</template>

<script>
export default {
  props: ['articles'],
  data () {
    return {
      author: '',
      title: '',
      desc: '',
      year: '',
      link: ''
    }
  },
  methods: {
    createArticle: function() {
      this.$axios.post('/add',{
        author : this.author,
        title : this.title,
        desc : this.desc,
        year : this.year,
        link : this.link
      })
    .then(result => {
      this.$emit('addArticle', {
        addArticle : result.data
      })   
    })  
    .catch(err => {
       alert(err)
      console.log(err)
    })
    }
  }
}
</script>

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

.whitespace {
  margin-bottom : 10px;
}
</style>
