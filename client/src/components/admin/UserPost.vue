<template>
  <div class="BlogPost">
    <div class="whitespace"></div>
    <div class="card">
      <div class="card-header">
       {{article.title}}
      </div>
      <div class="card-body">
        <p>
          {{article.post}}
        </p>
        <router-link :to="{
          name: 'PostDetail',
          params: {
            Id: getId()
          }
          }">
          <div class="btn btn-primary">
          Read More
        </div>
        </router-link>
        <div class="btn btn-danger" @click="deletePost">
          Delete
        </div>
      </div>
    </div>
    <div class="whitespace"></div>
  </div>
</template>

<script>
export default {
  props: ['article'],
  methods: {
    getId () {
      return this.article._id
    },
    deletePost () {
      this.$emit('delete-post', {
        id: this.getId()
      })
    }
  }
}
</script>

<style>
.whitespace {
  margin-bottom: 16px;
}
</style>
