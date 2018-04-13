import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	user: {}
}

const mutations = {
	login(state, user) {
		state.user = user
	}
}

const actions = {
	loginUser({ commit, state }, user) {
		commit('login', user)
	}
}

const getters = {}

export default new Vuex.Store({ state, mutations, actions, getters })
