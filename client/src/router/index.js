import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DetailArticle from '@/components/DetailArticle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/blog/:id/:title',
      component: DetailArticle,
      props: true
    }
  ]
})
