import Vue from 'vue' // MAM
import './plugins/vuetify'
import App from './App.vue'// MAM
import vuetify from './plugins/vuetify' 
import { store } from './store/store'
import router from './router'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
