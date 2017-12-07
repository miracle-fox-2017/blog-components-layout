import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const http = axios.create({
  baseURL: `http://localhost:3000`
})

export default new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    setArticles (state, payload) {
      this.articles = payload
    }
  },
  actions: {
    getAllArticles ({ commit }) {
      http.get('/api/article')
      .then(({data}) => {
        console.log('masuk sini')
        commit('setArticles', data)
      })
      .catch(err => console.error(err))
    }
  }
})
