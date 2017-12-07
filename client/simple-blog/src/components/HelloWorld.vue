<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div class="col-md-9">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Articlelist from '@/components/Articlelist'
import ArticleDetail from '@/components/ArticleDetail'
export default {
  name: 'HelloWorld',
  components: {
    Sidebar,
    Articlelist,
    ArticleDetail
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
