/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
// Home Component
import Home from "@/components/index";
import indexContent from "@/components/index-content";
import articleBody from "@/components/index-article";
import Article from "@/components/article";
// Admin Component
import Admin from "@/components/admin";
import adminArticles from "@/components/admin-articles";

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      component:Home,
      children:[
        {
          path:"",
          component:indexContent
        },
        {
          path:"/article",
          component:articleBody,
          children:[
            {
              path:":articleId",
              component:Article,
              props:true
            }
          ]
        }
      ]
    },
    {
      path:"/admin",
      component:Admin,
      children:[
        {
          path:"",
          component:adminArticles
        }
      ]
    }
  ]
})
