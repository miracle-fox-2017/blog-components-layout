import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import article from '@/components/article'
import login from '@/components/login'
import articledetail from '@/components/articledetail'
import articlelist from '@/components/articlelist'
import admin from '@/components/admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/blog',
      component: article,
      children: [
        {
          path: '',
          name: 'articlelist',
          component: articlelist
        },
        {
          path: ':id',
          name: 'articledetail',
          component: articledetail,
          props: true
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    }
  ]
})
