<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username" v-model="username">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary" @click="login">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login () {
        this.$axios.post('http://localhost:3000/login', {
          username: this.username,
          password: this.password
        })
        .then((response) => {
          localStorage.setItem('dataLogin', JSON.stringify(response.data))
          this.$router.push('main_content')
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>
