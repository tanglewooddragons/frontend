<template lang='pug'>
.wrapper
	.side-menu
		router-link(to="/").side-menu-logo
			img.responsive(src="@/assets/twd.png")
		router-link(to='/').side-menu-logo-small
			img.responsive(src="@/assets/twd.png")
		router-link(to="profile/").side-menu-element
			span.side.menu-text Profile
		a(href='#').side-menu-element
			span.side.menu-text Dragons
		a(href='#').side-menu-element
			span.side.menu-text Tasks
		a(href='#').side-menu-element
			span.side.menu-text Inventory
		a(href='#').side-menu-element
			span.side.menu-text Duels
		a(href='#').side-menu-element
			span.side.menu-text Leaderboards
		a(href='#').side-menu-element
			span.side.menu-text Market
		a(href='#').side-menu-element
			span.side.menu-text Shoutbox
		a(href='#').side-menu-element
			span.side.menu-text Settings
		a(href='#').side-menu-element(@click='logoutUser()')
			span.side-menu-text Logout
	.main
		router-view(name="logged")
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
