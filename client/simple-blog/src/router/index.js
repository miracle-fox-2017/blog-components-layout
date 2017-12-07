import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Articlelist from '@/components/Articlelist'
import ArticleDetail from '@/components/ArticleDetail'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/',
      component: HelloWorld,
      children: [
        {
          path: '',
          name: 'Articlelist',
          component: Articlelist
        },
        {
          path: '/:id',
          name: 'ArticleDetail',
          component: ArticleDetail,
          props: true
        }
      ]
    }
  ]
})
