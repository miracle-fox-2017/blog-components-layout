import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AdminIndex from '@/components/admin/TheIndexAdmin'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      // will put blog posts
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/admin',
      name: 'AdminIndex',
      component: AdminIndex
    }
  ]
})
