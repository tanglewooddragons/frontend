const toasts = {
	state: {
		toastId: 0,
		toasts: []
	},

	mutations: {
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
	},

	actions: {
		addToast({ commit }, toast) {
			commit('addToast', toast)
		},

		removeToast({ commit }, id) {
			commit('removeToast', id)
		}
	},

	getters: {
		getToasts(state) {
			return state.toasts
		}
	}
}

export default toasts
