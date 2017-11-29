<template>

  <b-container class="content" >
    <b-row class="container">
      <Sidebar :article="allarticle"/>
      <router-view :article="allarticle"/>
    </b-row>
  </b-container>

</template>

<script>
import MainContent from '@/components/MainContent'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'Contents',
  components: {
    MainContent,
    Sidebar
  },
  data () {
    return {
      allarticle: []
    }
  },
  mounted: function () {
    this.$http.get('api/article')
    .then(response => {
      this.allarticle.push(...response.data)
      // this.allarticle = data
      console.log(this.allarticle)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style>
.content{
  margin-top:5%;
}
.content-sidebar{
  background:red;
}
</style>

