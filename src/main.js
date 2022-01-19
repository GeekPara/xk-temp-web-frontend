import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import vuetify from './plugin/vuetify.js'

let app = new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
