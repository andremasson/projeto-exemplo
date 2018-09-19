import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import VueScrollTo from 'vue-scrollto'
import BackToTop from 'vue-backtotop'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

import './assets/css/app.css'
//require('./assets/css/app.css')
import '@/assets/js/simplyCountdown.js'

Vue.use(VueFire)
firebase.initializeApp({
  projectId: 'site-susanaroger',
  databseURL: 'https://site-susanaroger.firebaseio.com',
  timestampsInSnapshots: true
})

Vue.use(VueScrollTo)
Vue.use(BackToTop)

export const db = firebase.firestore()

new Vue({
  render: h => h(App)
}).$mount('#app')
