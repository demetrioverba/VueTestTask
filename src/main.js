import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

Vue.use(VueRouter)

new Vue({

  render: h => h(App),
  el: '#app',
  router, store
})
