import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
require('./assets/css/app.css')
import '@/assets/js/simplyCountdown.js'

Vue.use(VueFire)
firebase.initializeApp({
  projectId: 'site-susanaroger',
  databseURL: 'https://site-susanaroger.firebaseio.com',
  timestampsInSnapshots: true
})

export const db = firebase.firestore()

new Vue({
  render: h => h(App)
}).$mount('#app')
