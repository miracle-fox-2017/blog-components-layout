<template>
  <div class="post-detail">
    <div class="card">
      <div class="card-body">
        <h4>{{ detail.title }}</h4>
        <p class="card-text"> {{ detail.post }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      detail: {}
    }
  },
  methods: {
    getPostDetail () {
      this.$http.get(`/posts/${this.getId()}`)
      .then(({data}) => {
        this.detail = data
      })
      .catch(({err}) => console.log(err))
    },
    getId () {
      return this.$route.params.Id
    }
  },
  created () {
    this.getPostDetail()
  }
}
</script>

<style>

</style>
