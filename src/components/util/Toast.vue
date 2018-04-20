<template lang='pug'>
.toast(:class='classList', @click='kill()')
	slot
</template>

<script>

import { mapActions } from 'vuex'

export default {
	props: ['type', 'id'],
	created() {
		setTimeout(this.kill, 6 * 1000)
	},
	computed: {
		classList() {
			return [ 
					this.$props.type,
					this.$data.killed ? 'invisible' : ''
			]
		}
	},
	methods: {
		...mapActions(['removeToast']),
		kill() {
			this.$data.killed = true
			setTimeout(() => {
				this.removeToast(this.$props.id)
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
