// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/store'

const rootUrl = "http://localhost:3000";

Vue.prototype.$http = axios.create({
  baseURL: rootUrl
})

Vue.prototype.getTestToken = () => {
	return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTFiZGNiNDJmNWYyOTNhMjI0MmQ4ODMiLCJ1c2VybmFtZSI6Im5hdGFyIiwicGFzc3dvcmQiOiIkMmEkMTAkVU1GMjhJN1IwLlY5Mm9ZYm1YY1BmTzA5emo2b25ibkNGRmprRnRSSjJ3em91UHZZRE9qZk8iLCJpYXQiOjE1MTE4NzIwNzZ9.1TSqNOMN2gWm11n3uoM60FhBuw2aXyUH2lvIQOTcE1k";
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
