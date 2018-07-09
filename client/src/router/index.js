import Vue from 'vue'
import Router from 'vue-router'
import MainHeader from '@/components/MainHeader'
import BlogIndex from '@/components/BlogIndex'
import BlogItem from '@/components/BlogItem'
import BlogDetail from '@/components/BlogDetail'
import ShowName from '@/components/ShowName'
import AdminIndex from '@/components/AdminIndex'
import BlogItemAdmin from '@/components/BlogItemAdmin'
import UserItemAdmin from '@/components/UserItemAdmin'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Blog Index',
      component: BlogIndex,
      children: [
        {
          path: '',
          component: BlogItem
        },
        {
          path: '/articles/:articleId',
          component: BlogDetail,
          props: true
        }
      ]
    },
    {
      path: '/admin',
      name: 'Admin Area',
      component: AdminIndex,
      children: [
        {
          path: '',
          component: BlogItemAdmin
        },
        {
          path: '/admin/articles',
          component: BlogItemAdmin
        },
        {
          path: '/admin/users',
          component: UserItemAdmin
        }
      ]
    }
  ]
})
