import Vue from 'vue'
import Vuex from 'vuex'

import toasts from './store/toasts'
import user from './store/user'

Vue.use(Vuex)

const state = { }

const modules = {
	toasts, user
}


export default new Vuex.Store({ state, modules })
