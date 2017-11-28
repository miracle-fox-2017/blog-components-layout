<template>
  <div style="height:100%;">
    <homeHeader/>
    <router-view/>
    <div class="footer">
      <span>Copyright 2017 &copy; Tomy Djaya Budiman</span>
    </div>
  </div>
</template>
<script type="text/javascript">
import homeHeader from "@/components/index-header";
export default{
  components:{
    homeHeader
  }
}
</script>
<style lang="scss" scoped>
.footer {
  height: 150px;
  background-color: #7f8c8d;
  span {
    top: 50%;
    color: #FFF;
    display: block;
    font-size: 18px;
    text-align: center;
    position: relative;
    font-family: "Roboto",sans-serif;
    transform: translateY(-50%);
  }
}
</style>
