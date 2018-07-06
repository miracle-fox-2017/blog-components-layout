// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
/* eslint-disable */
import axios from 'axios'

Vue.use(BootstrapVue)
// Setting up Axios on Vue Instance, for use via this.$axios
const axiosConfig = {
  baseURL: 'http://localhost:3000/',
  timeout: 30000,
}
Vue.prototype.$http = axios.create(axiosConfig)
// Default vars set up from localStorage (ie, user has come back)
// Vue.prototype.$axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('id_token')}`;
// Vue.prototype.$axios.defaults.headers.common['Access-Token'] = localStorage.getItem('auth_token');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

