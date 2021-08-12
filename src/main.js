/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

// tailwind css
import './assets/styles/index.css'

Vue.use(Vuex)

// axios
Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'http://localhost:8000/'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
