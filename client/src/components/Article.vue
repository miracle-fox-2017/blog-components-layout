<template>
    <div class="Article"> 
      <div class="header">
             <h3> {{msg}} </h3>
      </div>
        <div class="container-fluid">
            <div class="row content">
                <sidebar :articles = "articles"> </sidebar>
                 <router-view :articles="articles"> </router-view>
                 
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
    name: 'Article',
    data () {
        return {
            msg: 'Welcome to The Blog!',
            articles: []
        }
    },
    components:{
        Sidebar
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
        }
    },
    created(){
        this.getDataArticle()
    }
        
}
</script>

<style scoped>
.header{
    margin-bottom : 25px;
}
.panel-body img{
    width: 20%;
    height: 10%;
}
</style>