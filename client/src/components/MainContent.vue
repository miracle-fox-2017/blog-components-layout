<template>
  <b-col style="padding-bottom:13%;" cols="12" md="8">
    <b-row>
      <div class="card-margin" v-for="(article, index) in allarticle" :key="index">
        <b-card-group>
            <b-card v-bind:title="article.title"
                  v-bind:img-src="article.img"
                  img-fluid
                  v-bind:img-alt="article.title"
                  img-top>
              <p class="card-text">
                  {{ article.subtitle}}
              </p>
              <div slot="footer">
                <router-link style="text-decoration: none;" :to="article._id + '/' + article.title.split(' ').join('-')">
                  <small class="text-muted">Read more</small>
                </router-link>
            </div>
          </b-card>
        </b-card-group>
      </div>
    </b-row>
  </b-col>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'MainContent',
  data () {
    return {
      allarticle: []
    }
  },
  mounted: function () {
    this.$http.get('api/article')
    .then(response => {
      this.allarticle.push(...response.data)
      // this.allarticle = data
      console.log(this.allarticle)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style>
.card-margin{
  margin-bottom:5%;
  text-decoration:none;
}
</style>
