<template lang="html">
  <div class="col-md-6 col-md-offset-3">
    <form class="form-horizontal" v-on:submit.prevent="loginNow">
      <fieldset>
        <legend>Login</legend>
        <div class="form-group">
          <label for="username" class="col-lg-2 control-label">Username</label>
          <div class="col-lg-10">
            <input v-model="username" class="form-control" id="username" placeholder="text" type="text">
          </div>
        </div>
        <div class="form-group">
          <label for="password" class="col-lg-2 control-label">Password</label>
          <div class="col-lg-10">
            <input v-model="password" class="form-control" id="password" placeholder="Password" type="password">
          </div>
        </div>
        <div class="form-group">
          <div class="col-lg-10 col-lg-offset-2">
            <button type="reset" class="btn btn-default">Cancel</button>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </fieldset>
    </form>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginNow: function () {
      axios.post('http://localhost:3000/api/signin', {
        username: this.username,
        password: this.password
      })
      .then(({data}) => {
        localStorage.setItem('name', 'admin')
        this.$router.push('/admin')
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>
