import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import http from '@/utils/request'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
