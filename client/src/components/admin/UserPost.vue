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
          <!-- taruh link untuk melihat full post nya -->
          Read More
        </div>
        </router-link>
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
    }
  }
}
</script>

<style>
.whitespace {
  margin-bottom: 16px;
}
</style>
