<template>
  <div>
    <navbar></navbar>
    <h3>{{ articles }}</h3>
    <div class="container col-md-12">
      <timeline v-for="article in articles" :article="article" :key="article.key"></timeline>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Timeline from './AdminArticles'
  import { mapActions } from 'vuex'
  export default {
    name: 'AdminTimeline',
    components: {
      Navbar,
      Timeline
    },
    methods: {
      ...mapActions([
        'getAllArticles'
      ])
    },
    computed: {
      articles () {
        return this.$store.state.articles
      }
    },
    created () {
      this.getAllArticles()
    }
  }
</script>