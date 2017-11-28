import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import Admin from '@/components/Admin'
import BlogArticle from '@/components/BlogArticle'
import ArticleDetail from '@/components/ArticleDetail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: 
  [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/blog',
      component: Blog,
        children: 
          [
            {
              path: '',
              component: BlogArticle
            },    
            {
              path: ':id',
              component: ArticleDetail,
              props : true
            },      
          ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }      
  ]
})
