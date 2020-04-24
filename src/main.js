import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue } from 'bootstrap-vue'
import vuetify from './plugins/vuetify'
import VueMask from 'v-mask' 

import router from './router/index'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueMask)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')