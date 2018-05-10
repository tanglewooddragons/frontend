<template lang='pug'>
.changer
	select(@change='change()', v-model='lang')
		option(value='en') English
		option(value='pl') polski
</template>

<script>
export default {
	methods: {
		change() {
			this.$root._i18n.locale = this.lang
			localStorage.setItem('lang', this.lang)
		}
	},
	data() {
		return {
			lang: this.$root._i18n.locale
		}
	}
}
</script>

<style lang='stylus' scoped>
.changer
	position fixed
	left 0
	bottom 0
</style>
