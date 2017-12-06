import Vue from "vue";
import Vuex from "vuex";
import http from "axios";

Vue.use(Vuex);
const axios=http.create({
  baseURL:"http://tomybudiman.cf:3031/"
});

const store=new Vuex.Store({
  state:{
    articles:[]
  },
  mutations:{
    setAllArticles(state,articles){
      state.articles=articles;
    },
    commitNewPost(state,article){
      state.articles.unshift(article);
    },
    commitDelPost(state,articleId){
      state.articles.map((article,i)=>{
        if(article._id == articleId){
          state.articles.splice(i,1);
        }
      });
    }
  },
  actions:{
    getAllArticles({commit}){
      axios.get("api/article/all").then(({data})=>{
        commit("setAllArticles",data.msg);
      }).catch((err)=>{
        console.log(err);
      });
    }
  }
});

export default store;
