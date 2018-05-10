const user = {
	state: {
		user: {}
	},

	mutations: {
		login(state, user) {
			state.user = user
		},

		logout(state) {
			state.user = {}
		}
	},

	actions: {
		loginUser({ commit }, user) {
			commit('login', user)
		},

		logout({ commit }) {
			commit('logout')
		},
	},

	getters: {
		getUser(state) {
			return state.user
		}
	}
}

export default user
