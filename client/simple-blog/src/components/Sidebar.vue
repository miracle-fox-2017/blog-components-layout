<template lang="html">
  <div class="">
    <div class="card mb-3">
      <h3 class="card-header">Card header</h3>
      <ul class="list-group list-group-flush">
        <li v-for="article in articles" class="list-group-item"><router-link :to="`/${article._id}`">{{article.title}}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'Sidebar',
  computed: {
    ...mapState([
      'articles'
    ])
  },
  methods: {
    ...mapActions([
      'getAllArticles'
    ])
  },
  created () {
    this.getAllArticles()
  }
}
</script>

<style lang="css">
</style>
