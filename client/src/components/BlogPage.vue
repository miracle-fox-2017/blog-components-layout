<template>

  <b-container class="content" >
    <b-row>
      <Sidebar></Sidebar>
      <DetailArticle></DetailArticle>
    </b-row>
  </b-container>

</template>

<script>
import DetailArticle from '@/components/DetailArticle'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'Contents',
  components: {
    DetailArticle,
    Sidebar
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

