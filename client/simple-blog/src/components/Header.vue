<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link :to="`/`" class="navbar-brand">Dj on the Blog</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#"><span class="sr-only">(current)</span></a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">User</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#loginmodal" v-if="!token">Login</a>
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#registermodal" v-if="!token">Register</a>
            <router-link :to="`/admin`" class="dropdown-item" v-if="token">Admin Page</router-link>
            <a class="dropdown-item" href="#" v-on:click="logout" v-if="token">Logout</a>
          </div>
        </div>
      </form>
    </div>
    <!-- login -->
    <div class="modal fade" id="loginmodal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Login</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <fieldset>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="objlogin.email">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="objlogin.password">
                </div>
              </fieldset>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" v-on:click="login(objlogin)">Login</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- register -->
    <div class="modal fade" id="registermodal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Register</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <fieldset>
                <div class="form-group">
                  <label for="exampleInputEmail1">Username</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="username" v-model="objregister.username">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="objregister.email">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="objregister.password">
                </div>
              </fieldset>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" v-on:click="register(objregister)">Register</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Header',
  data () {
    return {
      objlogin: {
        email: '',
        password: ''
      },

      objregister: {
        username: '',
        email: '',
        password: ''
      },

      token: ''
    }
  },
  methods: {
    login: function (objlogin) {
      axios.post('http://localhost:3000/api/signin', {
        email: this.objlogin.email,
        password: this.objlogin.password
      }).then(({data}) => {
        localStorage.setItem('blog_token', data.token)
        this.objlogin.email = ''
        this.objlogin.password = ''
        location.reload()
      }).catch((err) => {
        console.log(err)
      })
    },

    logout: function () {
      localStorage.removeItem('blog_token')
      location.reload()
    },

    register: function (objregister) {
      axios.post('http://localhost:3000/api/signup', {
        username: this.objregister.username,
        email: this.objregister.email,
        password: this.objregister.password
      }).then(({data}) => {
        this.objregister.username = ''
        this.objregister.email = ''
        this.objregister.password = ''
        location.reload()
      })
    },

    getToken: function () {
      this.token = localStorage.getItem('blog_token')
    }
  },

  created () {
    this.getToken()
  }
}
</script>

<style lang="css">
</style>
