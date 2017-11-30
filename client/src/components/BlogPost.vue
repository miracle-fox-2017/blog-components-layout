<template>
  <div>
    <main role="main">
      <div>
        <div class="jumbtron" id="headline">
          <div>
            <h3>Popular On </h3>
            <h1 class="display-3"> {{ headline.title }}</h1>
            <p class="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores doloribus<br>
              est dolor deleniti amet id placeat, ex ab, eius. Consequuntur imped<br>
              it quis dolorum consectetur accusa
            </p>
            <p>{{ headline.author }}</p>
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
        read: false
      }
    },
    beforeCreate: function () {
      let token = localStorage.getItem('token')
      return (token) ? console.log('hurray') : console.log('booo')
    },
    created: function () {
      axios.get(`http://localhost:4000/api/blog`)
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
