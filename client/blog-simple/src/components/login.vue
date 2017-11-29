<template>
    <div class="login">
      <div class="container">
        <div class="form-signin">
          <div class="">
            <img src="doit.png" alt="" width="50%" align="center">
          </div>
          <h2 class="form-signin-heading">Please sign in</h2>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" name="email" class="form-control" placeholder="Email address" required autofocus id="email">
          <input type="password" name="password" class="form-control" placeholder="Password" required id="password">
          <div class="checkbox">
            <label>
              <h4><a href="#">register</a></h4>
            </label>
          </div>
          <button class="btn btn-lg btn-danger btn-block" type="button" name="button" id="signin" v-on:click="login">sign in</button>
          <button class="btn btn-lg btn-primary btn-block" type="button" name="button" onclick="facebookLogin()">Login with facebook</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
