<template>
  <div class="hello"> 
    <div class="wrapper">
            <div class="form-signin text-center">
                <h1>{{ msg }}</h1>
                  <input type="text" class="form-control" id="username" name="username" placeholder="username" required="" autofocus="" />
                  <input type="password" class="form-control" id="password" name="password" placeholder="Password" required="" />
                  <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login" >Login</button>
                <ul>
                    <li data-toggle="modal" data-target="#register"> <a href="#"> Create Account </a></li>
                </ul>
            </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Login'
    }
  },
  methods:{
    login(){
        this.$http.post('api/signin', {
          username : document.getElementById("username").value,
          password : document.getElementById("password").value
        })
          .then((dataUser)=>{
            localStorage.setItem('token', dataUser.data.token)

          })
          .catch((reason)=>{
              console.log(reason)
          })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
}

.form-signin button{
    margin : 25px 0;
}
.form-signin ul{
    list-style: none
}
</style>
