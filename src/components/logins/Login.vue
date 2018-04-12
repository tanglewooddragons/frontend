<template lang='pug'>
form.login-box
	img(src="./twd.png")
	.form-row
		.form-control
			label E-mail
			input(type='text', placeholder='username@example.com')
	.form-row
		.form-control
			label Password
			input(type='password', placeholder='***********')
	.form-row
		.form-control
			button.lg.primary.fill Login
	.form-row
		.links #[router-link(to='/register') Register] | #[router-link(to='/forgot') Recover password]
</template>

<script>
</script>

<style lang='stylus' scoped>
@import '../../rhazp/src/variables.styl'

.links
	width 100%
	text-align center
	font-size $font-size-sm
</style>
