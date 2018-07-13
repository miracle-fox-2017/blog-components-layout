<template>
  <div class="ui stackable grid centered">
    <div class="five wide column center aligned">
      <div class="ui header login-header">
        <h1>VNX Blog Login</h1>
      </div>
      <div class="ui segment">
        <div class="ui form large form-login">
          <div class="field">
            <input name="username" placeholder="Username" type="text" v-model="username">
          </div>
          <div class="field">
            <input name="password" placeholder="Password" type="password" v-model="password">
          </div>
          <button class="ui primary button fluid" @click="login">Login</button>
        </div>
      </div>
      <div class="ui segment">
        <router-link to="/" replace>Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogLogin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      this.$http.post('/users/login', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        localStorage.setItem('token', response.data.token)
        console.log(localStorage.token)
        this.$router.push('/')
      })
      .catch(err => console.error(err))
    }
  }
}
</script>

<style>
.login-header {
  margin-top: 6em !important;
}

.form-login {
  margin: 2em 1em;
}
  
</style>
