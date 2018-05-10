import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import store from './store'
import messages from './locale'

Vue.use(VueI18n)

const i18n = new VueI18n ({
	locale: localStorage.getItem('lang') || 'en',
	fallbackLocale: 'en',
	messages
})

new Vue({
	el: '#app',
	router,
	store,
	i18n,
	components: { App },
	template: '<App/>'
})

