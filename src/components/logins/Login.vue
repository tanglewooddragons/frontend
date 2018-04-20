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
import { mapActions, mapGetters } from 'vuex'
import request from '@/utils/request'
import { login } from '@/utils/api'

import Toast from '@/components/util/Toast.vue'

export default {
	methods: {
		...mapActions(['loginUser', 'addToast']),
		...mapGetters(['getUser']),
		async login() {
			const { email, password } = this.$data
			const user = await request('/api/login', { 
				body: {
					email, password
				},
				method: 'POST'
			}).then(res => {
				this.addToast({ content: 'Login successful', type: 'positive' })
				localStorage.setItem('accessToken', res.accessToken)
				this.loginUser(res)
				this.$router.push('/')
			}).catch(err => {
				console.log('Error:', err)
				this.addToast({ content: err, type: 'negative' })
			})
		}
	},
	created() {
		// user in state
		if(this.getUser().accessToken) {
			this.$router.push('/')
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
