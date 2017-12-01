<template>
  <div class="container">
    <div class="row" style="margin-top: 5%;">
      <div class="col-md-6 offset-md-3">
        <div class="form-style-6">
          <form style="padding-top: 0;" v-on:submit.prevent="createNewUser">
          <input type="text" v-model="username" name="field1" placeholder="Your User Name" />
          <input type="password" v-model="password"  name="field2" placeholder="Your Password" />
          <input type="email" v-model="email"  name="field3" placeholder="Email Address" />
          <input type="submit" @click="createNewUser" value="Register" />
          </form>
        </div>
         <div v-if="error">
          <h4 style="color: red;">
            {{ msg }}
          </h4>
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
      email: '',
      error: false,
      msg: ''
    }
  },
  methods: {
    createNewUser: function () {
      axios.post(`http://localhost:4000/api/signup`, {
        username: this.username,
        password: this.password,
        email: this.email
      })
      .then(response => {
        console.log(response.data)
        this.$router.push({ name: 'signin' })
      })
      .catch(err => {
        this.error = true
        this.msg = 'The email or password you entered is incorrect.'
        console.log(err)
      })
    }
  }
}
</script>

