<template>

    <div class="container">
        <form class="form-horizontal">
            <div class="form-group">
                <label class="control-label col-sm-2" for="title">Title:</label>
                <div class="col-sm-8">
                    <input type="text" v-model="title" class="form-control" placeholder="Enter title">
                </div>
            </div>

            <div class="form-group">
                <label class="control-label col-sm-2" for="description">Description :</label>
                <div class="col-sm-8">
                    <input type="text" v-model="description" class="form-control" placeholder="Enter description">
                </div>
            </div>

            <div class="form-group">
                <label class="control-label col-sm-2" for="image_url">Image :</label>
                <div class="col-sm-8">
                    <input type="text" v-model="image_url" class="form-control" placeholder="Enter image_url">
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-8">
                    <button type="button" class="btn btn-default" @click="addNewArticle">Submit</button>
                </div>
            </div>

        </form>

        <div class="row">
            <div class="col-md-9">
                <h2>Panel Heading</h2>
                <div class="panel panel-default" v-for="(article, index) in articles">
                    <div class="panel-heading">
                        {{article.title}}
                    </div>
                    <div class="panel-body">
                        <p> <img :src="article.image_url"></p>
                        <p> {{article.description}}</p>
                        <div class="pull-right">
                            <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal" @click="cekEdit(article)">Edit</button>
                            <button type="button" class="btn btn-danger" @click="deleteArticle(article._id)">Delete</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <edit-article :articleDetail="articleDetail" @update-article="updateData"></edit-article>
    </div>
</template>

<script>
    import EditArticle from '@/components/EditArticle'
    export default {
        name: 'Admin',
        data() {
            return {
                msg: 'Halaman Admin',
                articles: [],
                title: '',
                description: '',
                image_url: '',
                articleDetail: {
                    title: '',
                    description: '',
                    image_url: '',
                    id: ''
                }
            }
        },
        components: {
            EditArticle
        },
        methods: {
            cekEdit(article) {
                this.articleDetail.title = article.title
                this.articleDetail.description = article.description
                this.articleDetail.image_url = article.image_url
                this.articleDetail.id = article._id
            },
            updateData(article) {
               let indexArticle = this.articles.findIndex(element => element._id == article._id)
               this.articles.splice(indexArticle, 1)
               this.articles.push(article)
            },
            addNewArticle() {
                this.$http.post('api/articles', {
                    title: this.title,
                    description: this.description,
                    image_url: this.image_url
                }).then((dataArticle) => {
                    this.articles.push(dataArticle.data)
                }).catch((reason) => {
                    console.log(reason)
                })

                this.title = ''
                this.description = ''
                this.image_url = ''
            },
            getDataArticle() {
                this.$http.get('api/articles')
                    .then((dataArticles) => {
                        this.articles = dataArticles.data
                    })
                    .catch((reason) => {
                        console.log(reason)
                    })
            },
            deleteArticle(id) {
                let index = this.articles.findIndex(element =>
                    element._id == id
                )

                this.articles.splice(index, 1)
                this.$http.delete(`api/articles/${id}`)
                    .then((data) => {
                        console.log(data)
                    })
                    .catch((reason) => {
                        console.log(reason)
                    })
            }
        },
        created() {
            this.getDataArticle()
        }
    }

</script>

<style scoped>
    .panel-body img {
        width: 10%;
        height: 20%;
    }

    ul {
        list-style: none;
    }
</style>