import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BlogPost from '@/components/BlogPost'
import Article from '@/components/Article'
import WriteNewArticle from '@/components/WriteNewArticle'
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
    }
  ]
})
