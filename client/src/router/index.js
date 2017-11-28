import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Article from '@/components/Article'
import ArticleList from '@/components/ArticleList'
import ArticleDetail from '@/components/ArticleDetail'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/',
      component: Article,
      children: [
        {
          path: '',
          name: 'ArticleList',
          component: ArticleList
        },
        {
          path: ':id',
          name: 'ArticleDetail',
          component: ArticleDetail,
          props: true
        }
      ]
    }

  ]
})
