<template>
  <div class="form">
    <div class="header">
      <div class="title">Login Admin</div>
      <div class="split">
        <button type="button" data-toggle="tab" href="#signin" @click="clearInput">Signin</button>
      </div>
      <div class="split">
        <button type="button" data-toggle="tab" href="#signup" @click="clearInput">Signup</button>
      </div>
    </div>
    <div class="tab-content">
      <div id="signin" class="tab-pane in active">
        <span class="input-label">Email</span>
        <input type="text" placeholder="Type your email address" v-model="email">
        <span class="input-label">Password</span>
        <input type="password" placeholder="Type your password" v-model="password">
        <button type="button" class="btn btn-primary" @click="signin">Login</button>
      </div>
      <div id="signup" class="tab-pane">
        <span class="input-label">Email</span>
        <input type="text" placeholder="Type your email address" v-model="email">
        <span class="input-label">Password</span>
        <input type="password" placeholder="Type your password" v-model="password">
        <button type="button" class="btn btn-primary" @click="signup">Register</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      email:"",
      password:""
    }
  },
  beforeCreate(){
    if(localStorage.getItem("login_blog") != null){
      this.$router.push("/admin");
    }
  },
  methods:{
    signin(){
      if(this.email != "" && this.password != ""){
        this.$axios.post("api/user/signin",{
          email:this.email,
          password:this.password
        }).then(function({data}){
          if(data.status){
            this.clearInput();
            localStorage.setItem("login_blog",data.token);
            this.$router.push("/admin");
          }else{
            console.log(data.msg);
          }
        }.bind(this)).catch(function(err){
          console.log(err);
        })
      }else{
        alert("Please fill the form!")
      }
    },
    signup(){
      if(this.email != "" && this.password != ""){
        this.$axios.post("api/user/signup",{
          email:this.email,
          password:this.password
        }).then(function({data}){
          if(data.status){
            alert("Success!");
            this.clearInput();
          }else{
            console.log(data.msg);
          }
        }.bind(this)).catch(function(err){
          console.log(err);
        });
      }else{
        alert("Please fill the form!")
      }
    },
    clearInput(){
      this.email="";
      this.password="";
    }
  }
}
</script>
<style lang="scss">
html,body {
  background-color: #F1F1F1;
}
.form {
  top: 50%;
  width: 90%;
  margin: auto;
  max-width: 350px;
  position: relative;
  border-radius: 5px;
  background-color: #FFF;
  box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  .header {
    overflow: hidden;
    .split {
      width: 50%;
      float: left;
      padding: 20px;
      box-sizing: border-box;
      button {
        padding: 0;
        color: #FFF;
        width: 100%;
        height: 40px;
        outline: none;
        font-size: 16px;
        border-radius: 20px;
        box-sizing: border-box;
        background-color: #3498db;
        border: 2px solid #2980b9;
        font-family: "Roboto",sans-serif;
      }
    }
    .title {
      color: #777;
      font-size: 35px;
      font-weight: 300;
      padding-top: 20px;
      text-align: center;
      font-family: "Roboto",sans-serif;
    }
  }
  .tab-content {
    overflow: hidden;
    box-sizing: border-box;
    padding: 0 20px 20px 20px;
    input {
      width: 100%;
      height: 40px;
      outline: none;
      margin-top: 5px;
      font-size: 18px;
      margin-bottom: 5px;
      box-sizing: border-box;
      padding: 5px 10px 5px 10px;
      font-family: "Roboto",sans-serif;
    }
    button {
      float: right;
      margin-top: 10px;
      font-family: "Roboto",sans-serif;
    }
    .input-label {
      color: #555;
      display: block;
      font-size: 16px;
      margin-top: 5px;
      font-weight: bold;
      font-family: "Roboto",sans-serif;
    }
  }
}
</style>
