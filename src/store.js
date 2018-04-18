import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	user: {},
	toasts: [
		{
			content: 'yes',
			type: 'positive',
			id: 0
		}
	]
}

const mutations = {
	login(state, user) {
		state.user = user
	},

	addToast(state, { content, type }) {
		let id = state.toasts.length
		state.toasts.push({
			content,
			type: type || 'neutral',
			id
		})

		return id
	},

	removeToast(state, id) {
		let i = state.toasts.findIndex(el => {
			return el.id === id
		})

		return state.toasts.splice(i, 1)
	}

}

const actions = {
	loginUser({ commit }, user) {
		commit('login', user)
	},

	addToast({ commit }, toast) {
		commit('addToast', toast)
	},

	removeToast({ commit }, id) {
		commit('removeToast', id)
	}
}

const getters = { 
	getToasts(state) {
		return state.toasts
	}
}

export default new Vuex.Store({ state, mutations, actions, getters })
