<template lang='pug'>
.toast(:class='classList', @click='kill()')
	slot
</template>

<script>

import { mapActions } from 'vuex'

export default {
	props: ['type', 'id'],
	computed: {
		classList() {
			return [ 
					this.$props.type,
					this.$data.killed ? 'invisible' : ''
			]
		}
	},
	methods: {
		kill() {
			this.$data.killed = true
			setTimeout(() => {
				this.$store.dispatch('removeToast', this.$props.id)
			}, 300)
		}
	},
	data() {
		return {
			killed: false
		}
	}
}

</script>
