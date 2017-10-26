// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// // index.js or main.js
// import '../node_modules/vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'v-icon', 'v-card', 'v-card-text', 'v-label', 'v-card-action'
]

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
