/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTailwind from 'vue-tailwind'

// tailwind css
import './assets/styles/index.css'

Vue.use(Vuex)
Vue.use(VueTailwind)

// axios
Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'http://localhost:8000/'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
