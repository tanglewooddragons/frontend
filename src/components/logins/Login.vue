<template lang='pug'>
form.login-box(@submit="login()")
	img(src="@/assets/twd.png")
	.form-row
		.form-control
			label E-mail
			input(v-model='email', type='text', placeholder='username@example.com')
	.form-row
		.form-control
			label Password
			input(v-model='password', type='password', placeholder='***********')
	.form-row
		.form-control
			button.lg.primary.fill Login
	.form-row
		.links #[router-link(to='/register') Register] | #[router-link(to='/forgot') Recover password]
</template>

<script>
import { mapActions } from 'vuex'
import request from '@/utils/request'

export default {
	...mapActions(['loginUser']),
	methods: {
		async login() {
			const { email, password } = this.$data
			const user = await request('api/login', { 
				body: {
					email, password
				},
				method: 'POST'
			})
		}
	},
	data() {
		return { 
			email: '',
			password: ''
		}
	}
}
</script>

<style lang='stylus' scoped>
@import '../../rhazp/src/variables.styl'

img
	max-width 100%

.links
	width 100%
	text-align center
	font-size $font-size-sm
</style>
