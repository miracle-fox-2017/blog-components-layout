<template>
  <div style="padding-bottom:13%;" class="col-md-8">
    <h2>{{ article.title }}</h2>
    <div class="img-row row">
      <div class="col-md-12">
        <img v-bind:src="article.img" style="height: auto;" class="img-responsive img-fluid"/>
      </div>
    </div>
    <div class="row">
      <div id="content" class="col-md-12">
        <p>{{ article.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      article: {}
    }
  },
  methods: {
    detailArticle (id) {
      this.$http.get('api/article/' + id)
      .then(({data}) => {
        console.log(data)
        this.article = data
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.detailArticle(this.id)
  }
}
</script>

<style>
h2{
  text-align:left
}
.img-row{
  padding-top:3%;
}
#content{
  padding-top:5%; 
  font-size:20px; 
  text-align:left
}
</style>
