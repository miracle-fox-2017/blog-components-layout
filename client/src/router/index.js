import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import DetailPage from '@/components/DetailPage'
import MainBlog from '@/components/MainBlog'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main_content',
      name: 'MainBlog',
      component: MainBlog,
      children: [
        {
          path: '/main_content/:contentId',
          name: 'DetailPage',
          component: DetailPage,
          props: true
        },
        {
          path: '',
          name: 'MainPage',
          component: MainPage
        }
      ]
    }
  ]
})
