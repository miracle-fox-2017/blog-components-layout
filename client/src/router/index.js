import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from '@/components/BlogHome'
import BlogLogin from '@/components/BlogLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlogHome',
      component: BlogHome
    },
    {
      path: '/login',
      name: 'BlogLogin',
      component: BlogLogin
    }
  ]
})
