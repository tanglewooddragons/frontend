<template lang='pug'>
	div
		.toast-container
			toast(v-for="toast in toasts",
				:key='toast.id',
				:type='toast.type',
				:id='toast.id'
			) {{ toast.content }}
		transition(name='fade',mode='out-in')
			router-view
</template>

<script>
import Toast from '@/components/util/Toast'
import { mapActions, mapGetters } from 'vuex'

export default {
	components: { Toast },
	computed: mapGetters({
		toasts: 'getToasts'
	})
}
</script>

<style lang='stylus'>
@import 'rhazp/src/rhazp.styl'

div
	width 100%

.fade-enter
	opacity 0

.fade-enter-active
	transition opacity .3s ease

.fade-leave-active
	transition opacity .3s ease
	opacity 0
</style>
