import Vue from 'vue'
import App from './App.vue'
import store from '../src/store'
import router from './router'
import vuetify from './plugins/vuetify';
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.use(store)
Vue.use(VueCookies)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
