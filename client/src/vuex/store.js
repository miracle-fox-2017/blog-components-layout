import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const rootUrl = "http://localhost:3000";


const http = axios.create({
  baseURL: rootUrl
})

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		articles: [],
		developer: ''
	},

	mutations: {
		setArticles(state, payload) {
			state.articles = payload
		},

		setDeveloper(state, payload) {
			state.developer = payload;
		}
	},

	actions: {
		getArticles(context) {

			http.get('/api/articles')
			.then(({data}) => {
				context.commit('setArticles', data);

			}).catch(err => console.log(err.message));
		},

	}
})