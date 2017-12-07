<template>
  <div>
    <navbar></navbar>
    <div class="container col-md-12">
      <div class="col-md-3">
        <div class="panel panel-default">
          <div class="panel-heading">
          List Article
          </div>
          <div class="panel-body">
            <sidebar v-for="(article, index) in articles" :key="index" :article="article"></sidebar>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <router-view :articles="articles"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Sidebar from '@/components/TimelineSidebar'
  import Articleitem from '@/components/TimelineItem'
  export default {
    name: 'TimelineRoute',
    components: {
      Navbar,
      Sidebar,
      Articleitem
    },
    data () {
      return {
        articles: []
      }
    },
    created () {
      this.$http.get('/api/article/')
      .then(({data}) => {
        console.log(data)
        this.articles = data
      })
      .catch(err => console.log(err))
    }
  }
</script>