<template lang='pug'>
.login
	form.login-box(@submit="login()")
		img(src="@/assets/twd.png").login-logo
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
				button.lg.primary.fill(v-t="'login.login'")
		.form-row.login-links
			router-link(to='/register') {{ $t('login.register') }}
			router-link(to='/forgot') {{ $t('login.recoverPassword') }}

	lang-changer
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import request from '@/utils/request'
import { login } from '@/utils/api'

import LangChanger from '@/components/util/LangChanger'

import Toast from '@/components/util/Toast.vue'

export default {
	components: { 'lang-changer': LangChanger },
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
				this.addToast({ content: this.$t('login.loginSuccessful'), type: 'positive' })
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

<style lang='stylus'>
@import '../../rhazp/src/variables.styl'

img.login-logo
	max-width 100%

.login-links
	width 100%
	text-align center
	display flex
	justify-content space-around
	font-weight 500

</style>
