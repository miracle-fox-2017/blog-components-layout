import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BlogPost from '@/components/BlogPost'
import Article from '@/components/Article'
Vue.use(Router)

export default new Router({
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
        {path: 'article/:id', component: Article, props: true}
      ]
    }
  ]
})
