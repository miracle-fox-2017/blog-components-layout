import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TimelineRoute from '@/components/TimelineRoute'
import TimelineItem from '@/components/TimelineItem'
import ItemDetail from '@/components/ItemDetail'
import AdminTimeline from '@/components/AdminTimeline'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/article',
      component: TimelineRoute,
      children: [{
        name: 'TimelineRoute',
        path: '',
        component: TimelineItem
      }, {
        path: '/article/:articleid',
        component: ItemDetail,
        props: true
      }]
    },
    {
      path: '/admin',
      name: 'AdminTimeline',
      component: AdminTimeline
    }
  ]
})
