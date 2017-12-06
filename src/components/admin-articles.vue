<template>
  <div>
    <!-- Modal Create New Article -->
    <div id="new-article" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Create New Article</h4>
          </div>
          <div class="modal-body">
            <span class="input-label">Title</span>
            <input type="text" placeholder="Type your article title" v-model="newArticle.title">
            <span class="input-label">Content</span>
            <textarea name="name" placeholder="Type your article content" v-model="newArticle.content"></textarea>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addNewArticle">Add</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Edit Article -->
    <div id="edit-article" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Edit {{editArticle.title}}</h4>
          </div>
          <div class="modal-body">
            <span class="input-label">Title</span>
            <input type="text" placeholder="Type your article title" v-model="editArticle.title">
            <span class="input-label">Content</span>
            <textarea name="name" placeholder="Type your article content" v-model="editArticle.content"></textarea>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateArticle(editArticle.id)">Edit</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Article List -->
    <ul class="article-list">
      <li v-for="(article,index) in articles">
        <span class="title">{{article.title}}</span>
        <div class="action-button">
          <button type="button" class="btn btn-sm btn-warning" @click="getArticleId(article._id)"  data-toggle="modal" data-target="#edit-article">Edit</button>
          <button type="button" class="btn btn-sm btn-danger" @click="deleteArticle(article._id)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
export default{
  data:function(){
    return{
      newArticle:{
        title:null,
        content:null
      },
      editArticle:{
        id:null,
        title:null,
        content:null
      }
    }
  },
  computed:{
    articles(){
      return this.$store.state.articles;
    }
  },
  methods:{
    addNewArticle:function(){
      this.$axios.post("/api/article/create",{
        title:this.newArticle.title,
        content:this.newArticle.content
      },{
        headers:{
          token:localStorage.getItem("login_blog")
        }
      }).then(({data})=>{
        if(data.status){
          this.newArticle.title="";
          this.newArticle.content="";
          this.$store.commit("commitNewPost",data.msg);
        }else{
          console.log(data.msg);
        }
      }).catch((err)=>{
        console.log(err);
      });
    },
    deleteArticle:function(targetId){
      this.$axios.delete(`/api/article/delete/${targetId}`,{
        headers:{
          token:localStorage.getItem("login_blog")
        }
      }).then(({data})=>{
        if(data.status){
          this.$store.commit("commitDelPost",targetId);
        }else{
          console.log(data.msg);
        }
      }).catch((err)=>{
        console.log(err);
      });
    },
    getArticleId:function(targetId){ // Set edit modal value
      this.articles.forEach(function(article){
        if(article._id == targetId){
          this.editArticle.id=targetId;
          this.editArticle.title=article.title;
          this.editArticle.content=article.content;
        }
      }.bind(this));
    },
    updateArticle:function(targetId){
      this.$axios.put(`/api/article/update/${targetId}`,{
        title:this.editArticle.title,
        content:this.editArticle.content
      },{
        headers:{
          token:localStorage.getItem("login_blog")
        }
      }).then(({data})=>{
        if(data.status){
          this.$store.dispatch("getAllArticles");
        }else{
          console.log(data.msg);
        }
      }).catch((err)=>{
        console.log(err);
      });
    }
  }
}
</script>
<style lang="scss">
.modal-body {
  .input-label {
    color: #777;
    display: block;
    font-size: 15px;
    font-weight: bold;
    font-family: "Roboto";
  }
  @mixin default-input {
    width: 100%;
    padding: 6px;
    margin-top: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
  input {
    @include default-input;
  }
  textarea {
    resize: none;
    height: 100px;
    @include default-input;
  }
}
.article-list {
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 900px;
  li {
    list-style: none;
    margin-bottom: 15px;
    .title {
      color: #555;
      font-size: 30px;
      font-family: "Roboto";
    }
    .action-button {
      margin-top: 5px;
    }
  }
}
</style>
