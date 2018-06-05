<template lang='pug'>
.content
	.jumbotron
	.container.md
		h1 {{ user.username }}

		router-link(:to="'/profile/'+user.id")
			h6.id {{ user.id }}

</template>

<script>
import { getUser as fetchUser } from '@/utils/api'
import { mapActions, mapGetters } from 'vuex'

export default {
	methods: {
		...mapGetters(['getUser']),
	},
	data() {
		return {
			user: this.getUser()
		}
	}
}
</script>

<style lang='stylus' scoped>
.jumbotron
	background url('https://pbs.twimg.com/media/De6H3qMX0AAgzP8.jpg:large') center center
	background-size cover
h1
	text-align center

h6
	text-align center
</style>
