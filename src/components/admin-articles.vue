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
      articles:null,
      editArticle:null,
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
  created:function(){
    this.getAllArticle();
  },
  methods:{
    getAllArticle:function(){
      this.$axios.get("/api/article/all").then(({data})=>{
        if(data.status){
          this.articles=data.msg;
        }else{
          console.log(data.msg);
        }
      }).catch((err)=>{
        console.log(err);
      });
    },
    addNewArticle:function(){
      this.$axios.post("/api/article/create",{
        title:this.newArticle.title,
        content:this.newArticle.content
      },{
        headers:{
          login_token:localStorage.getItem("login_token")
        }
      }).then(({data})=>{
        if(data.status){
          this.articles.push(data.msg);
          this.newArticle.title=null;
          this.newArticle.content=null;
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
          login_token:localStorage.getItem("login_token")
        }
      }).then(({data})=>{
        if(data.status){
          this.articles.forEach(function(article,i){
            if(article._id == targetId){
              this.articles.splice(i,1);
            }
          }.bind(this));
        }else{
          console.log(data.msg);
        }
      }).catch((err)=>{
        console.log(err);
      });
    },
    getArticleId:function(targetId){
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
          login_token:localStorage.getItem("login_token")
        }
      }).then(({data})=>{
        if(data.status){
          this.articles.forEach(function(article,i){
            if(article._id == targetId){
              this.articles[i].title=this.editArticle.title;
              this.articles[i].content=this.editArticle.content;
              this.editArticle.id=null;
              this.editArticle.title=null;
              this.editArticle.content=null;
            }
          }.bind(this));
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
