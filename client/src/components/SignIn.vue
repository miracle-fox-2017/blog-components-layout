<template>
  <div class="container">
    <div class="row" style="margin-top: 5%;">
      <div class="col-md-6 offset-md-3">
        <div class="form-style-6">
          <form style="padding-top: 0;">
          <input type="text" v-model="username" name="field1" placeholder="Your User Name"/>
          <input type="text" v-model="password" name="field1" placeholder="Your Password"/>
          <input type="submit" @click="signIn" value="Sign In">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    singIn: function () {
      axios.post(`http://localhost:4000/api/signin`, {
        username: this.username,
        password: this.password
      })
      .then(response.data => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>
