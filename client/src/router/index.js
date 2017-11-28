import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MainContent from '@/components/MainContent'
import DetailArticle from '@/components/DetailArticle'
/* eslint-disable */
import '@/assets/js/sticky-sidebar.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: MainContent
        }, {
          path: '/:id/:title',
          component: DetailArticle,
          props: true
        }
      ]
    }
    // {
    //   path: '/blog/:id/:title',
    //   component: DetailArticle,
    //   props: true
    // }
  ]
})
