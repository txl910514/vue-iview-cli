// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueCookie from 'vue-cookie'
import VueI18n from 'vue-i18n'
import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS
import './assets/css/iconfont.css'
import './assets/css/fontAwesome.scss'
import App from './App'
import router from './router'
import store from './store'
import locales from './locales'
import http from './utils/http'

Vue.use(VueI18n)
Vue.use(iView)
Vue.use(VueCookie)
Vue.use(http)

const browserLanguage = (window.navigator.language || window.navigator.browserLanguage).split('-')[0]
const lang = VueCookie.get('lang') || (browserLanguage in locales ? browserLanguage : 'en')
Vue.config.lang = lang
Object.keys(locales).forEach(lang => {
  Vue.locale(lang, locales[lang])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
