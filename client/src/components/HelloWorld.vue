<template>
  <div class="container">
    <div class="wrapper">
      <div class="form-signin">       
        <h2 class="form-signin-heading">Please login</h2>
        <input type="text" class="form-control" name="username" placeholder="Username" required="" autofocus="" v-model="username" /><br/>
        <input type="password" class="form-control" name="password" placeholder="Password" required="" v-model="password"/>      
        <label class="checkbox">
        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
        </label>
        <label>
          <a>Register here</a>
        </label>
        <button class="btn btn-lg btn-primary btn-block" @click="loginUser">Login</button>   
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginUser () {
      this.$http.post('/api/user/login', {
        username: this.username,
        password: this.password
      })
      .then(({data}) => {
        console.log(data)
        localStorage.setItem('tokenPakHaji', data.token)
        this.$router.push({name: 'TimelineRoute'})
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
	background: #eee !important;	
}

.wrapper {	
	margin-top: 80px;
  margin-bottom: 80px;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);  

  .form-signin-heading,
	.checkbox {
	  margin-bottom: 30px;
	}

	.checkbox {
	  font-weight: normal;
	}

	.form-control {
	  position: relative;
	  font-size: 16px;
	  height: auto;
	  padding: 10px;
		@include box-sizing(border-box);

		&:focus {
		  z-index: 2;
		}
	}

	input[type="text"] {
	  margin-bottom: -1px;
	  border-bottom-left-radius: 0;
	  border-bottom-right-radius: 0;
	}

	input[type="password"] {
	  margin-bottom: 20px;
	  border-top-left-radius: 0;
	  border-top-right-radius: 0;
	}
}
</style>
