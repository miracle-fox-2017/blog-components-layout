// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'

Vue.config.productionTip = false
/* eslint-disable no-new */
let local = 'http://localhost:3000';
let url = 'http://ec2-34-216-160-66.us-west-2.compute.amazonaws.com:3015'
Vue.prototype.$axios = axios.create({
  baseURL: url
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
