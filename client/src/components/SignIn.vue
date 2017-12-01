<template>
  <div class="container">
    <div class="row" style="margin-top: 5%;">
      <div class="col-md-6 offset-md-3">
        <div class="form-style-6">
          <form style="padding-top: 0;" v-on:submit.prevent="signIn">
          <input type="text" v-model="username" name="field1" placeholder="Your User Name"/>
          <input type="text" v-model="password" name="field1" placeholder="Your Password"/>
          <input type="submit" @click="signIn" value="Sign In">
          </form>
        </div>
        <div v-if="error">
          <h4 style="color: red;">The email or password you entered is incorrect. Please try again.
          If you’re still having trouble, reset your password.</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: '',
      token: '',
      error: false
    }
  },
  methods: {
    signIn: function () {
      console.log('hello')
      axios.post(`http://localhost:4000/api/signin`, {
        username: this.username,
        password: this.password
      })
      .then(response => {
        console.log(response.data)
        this.token = response.data
        localStorage.setItem('token', this.token)
        this.$router.push({name: 'blog'})
      })
      .catch(err => {
        this.error = true
        console.log(err)
      })
    }
  }
}
</script>
