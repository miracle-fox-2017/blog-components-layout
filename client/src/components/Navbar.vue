<template>
  <header class="ui attached stackable menu">
    <nav class="ui container">
      <a href="" class="item"><i class="home icon"></i>Home</a>
      <a href="" class="item"><i class="user outline icon"></i>About Me</a>
      <a href="" class="item"><i class="folder open outline icon"></i>Portfolio</a>
      <a href="" class="item"><i class="comments outline icon"></i>Testimonials</a>
      <a href="" class="item"><i class="file text outline icon"></i>Articles</a>
      <a href="" class="item"><i class="mail outline icon"></i>Contact</a>
      <div class="right item">
          <div v-if="jwtaccesstoken">
            <button class="ui basic button none-shadow" @click="logout">Logout</button>
            <button class="ui basic button">Profile</button>
          </div>
          <div v-else>
            <button class="ui basic button none-shadow" @click="login">Login</button>
            <button class="ui basic button">Signup</button>
          </div>
        </div>
    </nav>
    <login-modal></login-modal>
  </header>
</template>

<script>
import LoginModal from '@/components/LoginModal'
export default {
  name: 'Navbar',
  components: {
    LoginModal
  },
  data () {
    return {
      msg: 'Welcome World!',
      jwtaccesstoken: localStorage.getItem('jwtaccesstoken')
    }
  },
  methods: {
    login () {
      $('.ui.mini.modal').modal('show')
    },
    logout () {
      localStorage.removeItem('jwtaccesstoken')
      location.reload()
    }
  }
}
</script>

<style>

</style>
