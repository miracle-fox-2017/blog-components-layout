<template>
  <div class="admin">
    <navbar/>
    <div class="container-fluid">
      <div class="row">
        <sidebar/>
          <UserPost v-for="(article, key) in articles" :key="key" :article="article"> </UserPost>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/admin/TheNavbarAdmin'
import sidebar from '@/components/admin/TheSidebar'
import userPost from '@/components/admin/UserPost'
export default {
  components: {
    navbar: navbar,
    sidebar: sidebar,
    UserPost: userPost
  },
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticles () {
      this.$http.get('/posts')
      .then(({data}) => {
        this.articles = data
      })
      .catch((err) => console.log(err))
    }
  },
  created () {
    this.getArticles()
  }
}
</script>

<style>

</style>
