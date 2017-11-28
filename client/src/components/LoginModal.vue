<template>
  <div class="ui mini modal">
    <i class="close icon"></i>
    <div class="content">
      <button class="fluid ui facebook button" onclick="FBLogin()">
        <i class="facebook icon"></i>
        Login With Facebook
      </button>
      <div class="ui horizontal divider">
        Or
      </div>
      <div class="ui form">
        <div class="field">
          <input type="text" name="Username" placeholder="Username" v-model="datalogin.username">
        </div>
        <div class="field">
          <input type="password" name="Password" placeholder="Password" v-model="datalogin.password">
        </div>
        <button class="fluid ui button" type="submit" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginModal',
  data () {
    return {
      msg: 'Welcome World!',
      datalogin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$http.post('/users/login', this.datalogin)
      .then(response => {
        console.log(response)
        localStorage.setItem('jwtaccesstoken', response.data.token)
        location.reload()
      })
      .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>
