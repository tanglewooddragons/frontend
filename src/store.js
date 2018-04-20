import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	user: {},
	toastId: 0,
	toasts: []
}

const mutations = {
	login(state, user) {
		state.user = user
	},

	logout() {
		state.user = {}
	},

	addToast(state, { content, type }) {
		state.toastId++
		let id = state.toastId
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

	logout({ commit }) {
		commit('logout')
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
	},

	getUser() {
		return state.user
	}
}

export default new Vuex.Store({ state, mutations, actions, getters })
