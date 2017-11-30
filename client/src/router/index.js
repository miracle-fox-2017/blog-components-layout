import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BlogPost from '@/components/BlogPost'
import Article from '@/components/Article'
import WriteNewArticle from '@/components/WriteNewArticle'
import Register from '@/components/Register'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogPost,
      props: true,
      children: [
        {
          path: 'article/:id',
          component: Article,
          props: true
        }
      ]
    },
    {
      path: '/posting',
      name: 'posting',
      component: WriteNewArticle
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      children: [
        {
          path: 'signup',
          name: 'signup',
          component: SignUp
        },
        {
          path: 'signin',
          name: 'signin',
          component: SignIn
        }
      ]
    }
  ]
})
