import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AdminIndex from '@/components/admin/TheIndexAdmin'
import UserPostsAll from '@/components/admin/UserPostsAll'
import UserPost from '@/components/admin/UserPostDetail'
import AddPost from '@/components/admin/AddPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      // will put blog posts
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/admin',
      // name: 'AdminIndex',
      component: AdminIndex,
      children: [
        {
          path: '',
          name: 'AllPosts',
          component: UserPostsAll
        },
        {
          path: ':id',
          name: 'PostDetail',
          component: UserPost
        },
        {
          path: 'AddPost',
          name: 'AddPost',
          component: AddPost
        }
      ]
    }
  ]
})
