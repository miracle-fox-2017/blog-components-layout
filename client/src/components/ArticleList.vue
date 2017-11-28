<template>
     <div class="col-sm-9">       
                    <div class="panel panel-default" v-for="(article, index) in articles" :key="index">
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
    props : ['articles'],
    name: 'ArticleList',
    data () {
        return {
            msg: 'Welcome to The Blog!'
        }
    }
        
}
</script>

<style scoped>

</style>