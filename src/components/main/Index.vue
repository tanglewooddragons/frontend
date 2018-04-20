<template lang='pug'>
.wrapper
	.side-menu
		a(href='#').side-menu-element(@click='logoutUser()')
			span.side-menu-text Logout
	.main
		pre {{ user }}
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	created() {
		if(!this.getUser().accessToken) {
			this.$router.push('/login')
		}
	},
	methods: {
		...mapActions(['logout', 'addToast']),
		...mapGetters(['getUser']),
		logoutUser() {
			this.logout()
			this.addToast({ content: "Logout successful" })
			this.$router.push('/login')
		}
	},
	data() {
		return {
			user: this.getUser()
		}
	}
}
</script>
