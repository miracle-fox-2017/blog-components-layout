import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from '@/components/BlogHome'
import BlogLogin from '@/components/BlogLogin'
import BlogContent from '@/components/BlogContent'
import BlogArticle from '@/components/BlogArticle'
import BlogAdminDashboard from '@/components/BlogAdminDashboard'
import BlogArticlePost from '@/components/BlogArticlePost'
import BlogAdminContent from '@/components/BlogAdminContent'

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
          path: 'article/:id',
          component: BlogArticle,
          props: true
        }
      ]
    },
    {
      path: '/login',
      name: 'BlogLogin',
      component: BlogLogin
    },
    {
      path: '/admin',
      name: 'BlogAdminDashboard',
      component: BlogAdminDashboard,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          next()
        } else {
          next('/login')
        }
      },
      children: [
        {
          path: '',
          name: 'BlogAdminContent',
          component: BlogAdminContent
        },
        {
          path: 'articles/post',
          name: 'BlogArticlePost',
          component: BlogArticlePost
        }
      ]
    },
    {
      path: '/logout',
      name: 'BlogLogout',
      beforeEnter: (to, from, next) => {
        localStorage.clear()
        next('/')
      }
    }
  ]
})
