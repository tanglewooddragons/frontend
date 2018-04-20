import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/logins/Login'
import Register from '@/components/logins/Register'

import Index from '@/components/main/Index'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/login',
			components: {
				default: Login
			}
		},
		{
			path: '/register',
			components: {
				default: Register
			}
		},
		{
			path: '/',
			components: {
				default: Index
			}
		}
	]
})
