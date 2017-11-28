<template>

<div>
    <h3>{{msg}}</h3>
    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add Article</button>

    <div class="table-responsive">          
        <table class="table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th colspan="2">Action</th>
                </tr>
            </thead>
            
            <tbody>
                <tr v-for="(article, index) in articles">
                    <td> {{index+1}}</td>
                     <td> 
                        <img :src="article.image_url">
                     </td>
                     <td>
                        {{article.title}}
                     </td>
                     <td>
                        {{article.description}}
                     </td>

                     <td>
                        <li>
                            <a href="#"> Edit</a>
                        </li>
                     </td>

                     <td>
                        <li>
                            <a href="#" @click="deleteArticle(article._id)">Delete</a>
                        </li>
                     </td>
                </tr>
            </tbody>
        </table>
    </div>

</div>

   

</template>

<script>


export default {
    name : 'Admin',
    data(){
        return {
            msg: 'Halaman Admin',
            articles: []
        }
    },
    methods:{
        getDataArticle(){
            this.$http.get('api/articles')
                .then((dataArticles)=>{
                  this.articles = dataArticles.data
                })
                .catch((reason)=>{
                    console.log(reason)
                })
        },
        deleteArticle(id){
          let index = this.articles.findIndex(element =>{
               if(element._id == id){
                  return this.articles.indexOf(element)
               }
            })
          
          this.articles.splice(index, 1)
          this.$http.delete(`api/articles/${id}`)
                .then((data)=>{
                    console.log(data)
                })
                .catch((reason)=>{
                    console.log(reason)
                })
        }
    },
    created(){
        this.getDataArticle()
    }
}
</script>

<style scoped>
    img{
        width : 50%;
        height: 20%;
    },
    ul{
        list-style: none;
    }
</style>