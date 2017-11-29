<template>
  <div class="container-fluid">
    <div class="row content">
      <side :posts="article"></side>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import side from '@/components/side'
export default {

  name: 'article',
  components: {
    side
  },

  data () {
    return {
      article: []
    }
  },

  methods: {
    getAllarticle: function () {
      this.$http.get('/api/articles')
        .then((response) => {
          this.article = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },

  created: function () {
    this.getAllarticle()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
img {
  width: 500px;
}
</style>
