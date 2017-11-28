import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TimelineRoute from '@/components/TimelineRoute'
import TimelineItem from '@/components/TimelineItem'
import ItemDetail from '@/components/ItemDetail'

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
      name: 'TimelineRoute',
      component: TimelineRoute,
      children: [{
        path: '',
        component: TimelineItem
      }, {
        path: '/article/:articleid',
        component: ItemDetail,
        props: true
      }]
    }
  ]
})
