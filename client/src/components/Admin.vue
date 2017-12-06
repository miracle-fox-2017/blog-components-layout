<template>
  <div class="admin">
    <h1>{{ msg }}</h1>
    <addpost @new-article="newArticleHandle"/>
    <table class="table table-striped table-hover ">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(article, index) in articles">
          <td>{{ index+1 }}</td>
          <td>{{ article.title }}</td>
          <td>
            <button class="btn btn-link btn-xs" data-toggle="modal" data-target="#edit" @click="getId(article._id)" ><span class="glyphicon glyphicon-pencil"></span></button>
            <!-- <a href="#" class="btn btn-link btn-xs"><span class="glyphicon glyphicon-pencil"></span></a> -->
            <button class="btn btn-link btn-xs" @click="delId(article._id)"><span class="glyphicon glyphicon-trash"></span></button >
            <router-link :to="{ path: '/blog/' + article._id, params: {} }"><span class="glyphicon glyphicon-link"></span></router-link>
          </td>
        </tr>
      </tbody>
    </table> 
    <editpost :editarticle="articl" @new-article="editNewArticleHandle"/>
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
      articl: ''
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
        return e._id === id
      })
      this.articl = article
    },
    editNewArticleHandle (payload) {
      let i = this.articles.findIndex(function (e) {
        return e._id === payload._id
      })
      this.articles.splice(i, 1, payload)
    },
    delId (id) {
      axios.delete('http://vps.masfaris.com:3003/api/blog/' + id, {
        headers: {'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhMWJiNGQ4ZTUwOWZmNzNkYTU3YzYzNiIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE1MTE3Njc5OTl9.3rE7sD-fCk9kWgxdXftyGfEqdNEL2lHHgen-mjkPa5U'}
      })
      .then(result => {
        let i = this.articles.findIndex(function (e) {
          return e._id === id
        })
        this.articles.splice(i, 1)
        alert('Success delete')
      })
      .catch(err => {
        console.log(err)
        alert('UnSuccess delete')
      })
    }
  },
  created () {
    axios.get('http://vps.masfaris.com:3003/api/blog')
    .then(result => {
      this.articles = result.data.blogPost
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
