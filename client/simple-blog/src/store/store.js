import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    articles: [],
    article: ''
  },

  mutations: {
    setallarticle: function (state, payload) {
      state.articles = payload
    },

    setOneArticle: function (state, payload) {
      state.article = payload
    },

    setDeleteArticle: function (state, payload) {
      state.articles.forEach((article, index) => {
        if (article._id === payload._id) {
          state.articles.splice(index, 1)
        }
      })
    },

    seteditarticle: function (state, payload) {
      var index = state.articles.findIndex((elemen) => {
        return elemen._id === payload._id
      })
      state.articles[index].title = payload.title
      state.articles[index].description = payload.description
      state.articles[index].urlimg = payload.urlimg
    },

    setAddArticle: function (state, payload) {
      http.get('/api/articles').then(({data}) => {
        state.articles = data
      }).catch((err) => {
        console.log(err)
      })
    }
  },

  actions: {
    getAllArticles: function ({commit}) {
      http.get('/api/articles').then(({data}) => {
        commit('setallarticle', data)
        console.log(data)
      }).catch((err) => {
        console.log(err)
      })
    },

    getOneArticles: function ({commit}, paramsid) {
      http.get('api/articles/' + paramsid).then(({data}) => {
        commit('setOneArticle', data)
      }).catch((err) => {
        console.log(err)
      })
    },

    deleteArticles: function ({commit}, artikelid) {
      http.delete('api/articles/delete/' + artikelid._id).then(({data}) => {
        commit('setDeleteArticle', data)
      }).catch((err) => {
        console.log(err)
      })
    },

    editArticles: function ({commit}, articleedit) {
      http.put('api/articles/edit/' + articleedit.id, {
        title: articleedit.title,
        description: articleedit.description,
        urlimg: articleedit.urlimg
      }).then(({data}) => {
        commit('seteditarticle', data)
      }).catch((err) => {
        console.log(err)
      })
    },

    addArticle: function ({commit}, newArticle) {
      console.log('ini dari action', newArticle)
      http.post('/api/articles', {
        title: newArticle.title,
        description: newArticle.description,
        urlimg: newArticle.urlimg
      }).then(({data}) => {
        commit('setAddArticle', data)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
})
