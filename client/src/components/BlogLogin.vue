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
        No account? <a href="#">SignUp</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
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
      axios.post('http://localhost:3000/users/login', {
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
body {
  background: #eee !important;
}

.login-header {
  margin-top: 5em !important;
}

.form-login {
  margin: 2em 1em;
}
  
</style>
