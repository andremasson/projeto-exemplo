import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
require('./assets/css/app.css')

import '@/assets/js/simplyCountdown.js'

new Vue({
  render: h => h(App)
}).$mount('#app')
