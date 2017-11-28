import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import Admin from '@/components/Admin'
import BlogArticle from '@/components/BlogArticle'
import ArticleDetail from '@/components/ArticleDetail'
import showList from '@/components/showList'
import deleteArticle from '@/components/deleteArticle'
import editArticle from '@/components/editArticle'

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
      component: Admin,
        children:
        [
          {
            path: '',
            component: showList
          },
          {
            path: 'delete/:id',
            component: deleteArticle,
            props: true
          },
          {
            path: 'edit/:id',
            component: editArticle,
            props: true
          }          
        ]
    }      
  ]
})
