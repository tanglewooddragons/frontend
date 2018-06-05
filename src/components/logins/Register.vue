<template lang='pug'>
.register
	form.login-box(@submit="register()")
		img(src="@/assets/twd.png")
		.form-row
			.form-control
				label(v-t="'login.username'")
				input(v-model='username', type='text', placeholder='Username')
		.form-row
			.form-control
				label(v-t="'login.email'")
				input(v-model='email', type='text', placeholder='username@example.com')
		.form-row
			.form-control
				label(v-t="'login.password'")
				input(v-model='password', type='password', placeholder='***********')
		.form-row
			.form-control
				label(v-t="'login.confirmPassword'")
				input(v-model='confirmPassword', type='password', placeholder='***********')
		.form-row
			.form-control
				button.lg.primary.fill(v-t="'login.register'")
		.form-row.login-links
			router-link(to='/') {{ $t('login.login') }}
			router-link(to='/forgot') {{ $t('login.recoverPassword') }}
	lang-changer
</template>

<script>
import { mapActions } from 'vuex'
import request from '@/utils/request'

import LangChanger from '@/components/util/LangChanger'

export default {
	components: { 'lang-changer': LangChanger },
	methods: {
		...mapActions([ 'loginUser', 'addToast' ]),
		async register() {
			const { email, password, confirmPassword, username } = this.$data

			if(password !== confirmPassword || password === '') {
				this.addToast({ content: this.$t('login.passwordsDontMatch'), type: 'negative' })
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
