import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/logins/Login'
import Register from '@/components/logins/Register'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Login
		},
		{
			path: '/register',
			component: Register
		}
	]
})
