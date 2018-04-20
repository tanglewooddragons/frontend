<template lang='pug'>
form.login-box(@submit="register()")
	img(src="@/assets/twd.png")
	.form-row
		.form-control
			label Username
			input(v-model='username', type='text', placeholder='Username')
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
			label Confirm password
			input(v-model='confirmPassword', type='password', placeholder='***********')
	.form-row
		.form-control
			button.lg.primary.fill Register
	.form-row
		.links #[router-link(to='/') Have an accout? Login] | #[router-link(to='/forgot') Recover password]
</template>

<script>
import { mapActions } from 'vuex'
import request from '@/utils/request'

export default {
	methods: {
		...mapActions([ 'loginUser', 'addToast' ]),
		async register() {
			const { email, password, confirmPassword, username } = this.$data

			if(password !== confirmPassword || password === '') {
				this.addToast({ content: "Passwords do not match", type: 'negative' })
				return false
			}

			const user = await request('/api/register', { 
				body: {
					email, password, username, passwordRepeat: confirmPassword
				},
				method: 'POST'
			}).then(res => {
				console.log(res)
			}).catch(err => {
				console.log(err)
				this.addToast({ content: err, type: 'negative' })
			})
		}
	},
	data() {
		return { 
			username: '',
			email: '',
			password: '',
			confirmPassword: ''
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
