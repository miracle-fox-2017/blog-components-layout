import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from '@/components/BlogHome'
import BlogLogin from '@/components/BlogLogin'
import BlogContent from '@/components/BlogContent'
import BlogArticle from '@/components/BlogArticle'
import BlogAdminDashboard from '@/components/BlogAdminDashboard'
import BlogArticlePost from '@/components/BlogArticlePost'
import BlogArticleEdit from '@/components/BlogArticleEdit'
import BlogAdminContent from '@/components/BlogAdminContent'
import BlogShortArticle from '@/components/BlogShortArticle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: BlogHome,
      children: [
        {
          path: '',
          name: 'BlogContent',
          component: BlogContent,
          children: [
            {
              path: '',
              component: BlogShortArticle
            },
            {
              path: 'article/:id',
              component: BlogArticle,
              props: true
            }
          ]
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
        },
        {
          path: 'articles/edit/:id',
          name: 'BlogArticleEdit',
          component: BlogArticleEdit,
          props: true
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
