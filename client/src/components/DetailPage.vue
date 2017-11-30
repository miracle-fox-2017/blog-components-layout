<template>
  <div class="detail-page">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card bg-dark text-white">
            <div class="card-img-overlay">
              <h4 class="card-title">{{detailBlog.title}}</h4>
              <p class="card-text">{{detailBlog.content}}</p>
              <p class="card-text">{{detailBlog.createdAt}}</p>
              <router-link :to="`/main_content/edit/${detailBlog._id}`">
                <button class="btn btn-primary" type="button" name="button" @click="sendData">Edit This Post</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailPage',
    props: ['contentId'],
    data () {
      return {
        detailBlog: {}
      }
    },
    methods: {
      getArticlesDetails (contentId) {
        this.$axios.get(`http://localhost:3000/articles/${contentId}`)
        .then((response) => {
          this.detailBlog = response.data
        })
      },
      sendData () {
        this.$emit('passData', {
          list: this.detailBlog
        })
      }
    },
    created: function () {
      this.getArticlesDetails(this.contentId)
    },
    watch: {
      contentId (newId) {
        this.contentId = newId
        this.getArticlesDetails(this.contentId)
      }
    }
  }
</script>

<style scoped>
.card {
  height: 400px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
}
.container {
  padding-bottom: 2em
}
</style>
