<template>
  <div class="col-md-3">
    <div class="list-group">
      <router-link :to="{ path: '/blog/' }" class="list-group-item active">
        List Articles
      </router-link>
      <span v-for="article in childarticles">
        <router-link :to="{ path: '/blog/' + article.id }" class="list-group-item">
          {{ article.title }}
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['childarticles']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
