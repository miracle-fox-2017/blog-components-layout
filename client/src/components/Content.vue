<template>

  <b-container class="content" >
    <b-row>
      <Sidebar></Sidebar>
      <MainContent></MainContent>
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

