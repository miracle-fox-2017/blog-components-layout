<template>
  <div>
    <main role="main">
      <div>
        <div class="jumbtron" id="headline">
          <div>
            <h3>Popular On Azharie's Note </h3>
            <h1 class="display-3"> {{ headline.title }}</h1>
            <p class="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores doloribus<br>
              est dolor deleniti amet id placeat, ex ab, eius. Consequuntur imped<br>
              it quis dolorum consectetur accusa
            </p>
            <p>{{ headline.author.username }}</p>
            <p><router-link :to="`/blog/article/${headline._id}`">Read More</router-link></p>
          </div>
        </div>
        <div class="row marketing">
          <div class="col-lg-3">
            <ListArticle :posts="posts"/>
          </div>
          <div class="col-lg-9">
              <router-view/>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import axios from 'axios'
  import ListArticle from './ListArticle'
  export default {
    name: 'BlogPost',
    components: { ListArticle },
    data () {
      return {
        headline: '',
        posts: [],
        read: false,
        token: localStorage.getItem('token')
      }
    },
    beforeCreate: function () {
      return (localStorage.getItem('token')) ? console.log('masukk') : this.$router.push({name: 'register'})
    },
    created: function () {
      const jwt = require('jsonwebtoken')
      jwt.verify(localStorage.getItem('token'), 'foobar', function (err, decoded) {
        if (!err) {
          localStorage.setItem('userId', decoded.id)
        }
      })
      axios.get(`http://localhost:4000/api/blog`, {headers: {token: this.token}})
      .then(response => {
        console.log(response)
        this.posts = response.data
        let index = Math.floor(Math.random() * this.posts.length)
        this.headline = this.posts[index]
      })
      .catch(e => {
        console.log(e)
      })
    }
  }
</script>
<style scoped="jombotron">
  #headline {
    background-color: #e9ecef;
  }
</style>
