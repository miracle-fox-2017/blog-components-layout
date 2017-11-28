<template>
  <div class="admin">
    <h1>{{ msg }}</h1>
    <addpost @new-article="newArticleHandle"/>
    <table class="table table-striped table-hover ">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Date Created</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(article, index) in articles">
          <td>{{ index+1 }}</td>
          <td>{{ article.title }}</td>
          <td>DDMMYY HHMMSS</td>
          <td>
            <button class="btn btn-link btn-xs" data-toggle="modal" data-target="#edit" @click="getId(article.id)" ><span class="glyphicon glyphicon-pencil"></span></button>
            <!-- <a href="#" class="btn btn-link btn-xs"><span class="glyphicon glyphicon-pencil"></span></a> -->
            <button class="btn btn-link btn-xs" @click="delId(article.id)"><span class="glyphicon glyphicon-trash"></span></button >
          </td>
        </tr>
      </tbody>
    </table> 
    <editpost :editarticle="article" @new-article="editArticleHandle"/>
  </div>
</template>

<script>
import axios from 'axios'
import addpost from '@/components/AddPost'
import editpost from '@/components/EditPost'
export default {
  name: 'Admin',
  data () {
    return {
      msg: 'Admin Dashboard',
      articles: [],
      article: ''
    }
  },
  components: {
    addpost,
    editpost
  },
  methods: {
    newArticleHandle (payload) {
      this.articles.push(payload)
    },
    getId (id) {
      let article = this.articles.find(function (e) {
        return e.id === id
      })
      this.article = article
    },
    editNewArticleHandle (payload) {
      console.log(payload)
    },
    delId (id) {
      axios.delete('http://localhost:3000/articles/' + id)
      .then(result => {
        console.log(result)
        let article = this.articles.findIndex(function (e) {
          return e.id === id
        })
        this.articles.splice(article, 1)
        alert('Success delete')
      })
      .catch(err => {
        console.log(err)
        alert('UnSuccess delete')
      })
    }
  },
  created () {
    axios.get('http://localhost:3000/articles')
    .then(result => {
      this.articles = result.data
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
