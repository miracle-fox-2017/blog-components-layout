<template>
  <div class="wrapper">
    <navbar/>
    <router-view/>
  </div>
</template>
<script type="text/javascript">
import navbar from "@/components/admin-navbar";
export default{
  components:{
    navbar
  }
}
</script>
<style lang="scss">
.wrapper {
  width: 90%;
  margin: auto;
  max-width: 900px;
  box-sizing: border-box;
  padding: 75px 25px 25px 25px;
  a {
    cursor: pointer;
  }
}
</style>
