// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.prototype.$axios = axios.create({
  baseURL: 'http://localhost:3000'
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
