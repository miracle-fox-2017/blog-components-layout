import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import HelloMiracle from '@/components/HelloMiracle'
// import Main from '@/components/Main'
import Blog from '@/components/Blog'
import Admin from '@/components/Admin'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Articles from '@/components/Articles'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/blog',
      component: Blog,
      children: [
        {
          path: '',
          component: Articles,
          props: true
        },
        {
          path: ':id',
          component: Article,
          props: true
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      props: true,
      beforeEnter: function (to, from, next) {
        if (localStorage.getItem('name')) {
          next('/admin')
        } else {
          next()
        }
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      props: true,
      beforeEnter: function (to, from, next) {
        if (!localStorage.getItem('name')) {
          next('/login')
        } else {
          next()
        }
      }
    }
  ]
})
