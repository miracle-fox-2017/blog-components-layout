<template>
  <div class="col-sm-9">       
    <div class="panel panel-default">
        <h4>{{article.title}}</h4>
        <div class="panel-body">
            <img :src="article.image_url">
            <p> {{article.description}}</p>
        </div>
    </div>
    </div>    
</template>
<script>
export default {
    props:['id'],
    name: 'ArticleDetail',
    data () {
        return {
            article:''
        }
    },
    methods:{
        getDataArticle(id){
             this.$http.get('api/articles/' + id)
                .then((dataArticle)=>{
                    this.article = dataArticle.data
                })
                .catch((reason)=>{
                    console.log(reason)
                })
        }
    },
    watch:{
        id : function (){
             this.getDataArticle(this.id)
        } 
    },
    created(){
        this.getDataArticle(this.id)
    }
}
</script>

<style scoped>

</style>