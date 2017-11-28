import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from '@/components/BlogHome'
import BlogLogin from '@/components/BlogLogin'
import BlogContent from '@/components/BlogContent'
import BlogArticle from '@/components/BlogArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlogHome',
      component: BlogHome,
      children: [
        {
          path: '',
          component: BlogContent
        },
        {
          path: '/article/:id',
          component: BlogArticle,
          props: true
        }
      ]
    },
    {
      path: '/login',
      name: 'BlogLogin',
      component: BlogLogin
    }
  ]
})
