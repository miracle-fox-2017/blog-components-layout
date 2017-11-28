<template>
  <div>
    <main role="main">
      <div class="jumbtron" id="headline">
        <div>
          <h1 class="display-3"> {{ headline.title }}</h1>
          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolores doloribus<br>
            est dolor deleniti amet id placeat, ex ab, eius. Consequuntur imped<br>
            it quis dolorum consectetur accusa
          </p>
          <p>{{ headline.author }}</p>
          <p><router-link v-bind:to="`/blog/article/${headline._id}`">Read More</router-link></p>
        </div>
      </div>
      <div class="row marketing">
        <div class="col-lg-6">
            <p>goisrgoi</p>
        </div>
        <div class="col-lg-6">
          <div class="card" style="width: 20rem;" v-for="article in posts">
            <img class="card-img-top" :src=article.img  style="width: 55rem; height: 28rem;"alt="Card image cap">
            <div class="card-body" style="width: 55rem">
              <h4 class="card-title">{{ article.title }}</h4>
              <p class="card-text">{{ article.graf }}</p>
              <p class="card-text">{{ article.author }}</p>
              <p><router-link v-bind:to="`/blog/article/${article._id}`">Read More</router-link></p>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'BlogPost',
    data () {
      return {
        headline: '',
        posts: []
      }
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
