<template>
  <div class="header-index">
    <span>Storyshare</span>
    <div class="access-group">
      <router-link to="/admin">
        <button type="button">Admin</button>
      </router-link>
      <router-link to="/">
        <button type="button">Home</button>
      </router-link>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default{}
</script>
<style lang="scss">
.header-index {
  height: 80%;
  min-height: 250px;
  max-height: 600px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 0 15px 0 rgba(0,0,0,.5);
  background-image: url("../assets/index.jpg");
  span {
    top: 50%;
    color: #FFF;
    display: block;
    font-size: 60px;
    font-weight: 100;
    text-align: center;
    position: relative;
    font-family: "Roboto",sans-serif;
    transform: translateY(-50%);
  }
  .access-group {
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    margin: auto;
    padding: 20px;
    max-width: 900px;
    position: absolute;
    box-sizing: border-box;
    button {
      color: #FFF;
      outline: none;
      cursor: pointer;
      font-size: 17px;
      margin-right: 10px;
      box-sizing: border-box;
      border: 1px solid #FFF;
      padding: 5px 8px 5px 8px;
      background-color: transparent;
      font-family: "Roboto",sans-serif;
    }
  }
}
.header-index::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0,0,0,.5);
  background: radial-gradient(rgba(0,0,0,.25),rgba(0,0,0,.75));
}
</style>
