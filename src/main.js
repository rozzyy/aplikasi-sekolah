/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTailwind from 'vue-tailwind'
import VCalendar from 'v-calendar'
import VueSweetalert2 from 'vue-sweetalert2'

// script
import clickOutside from './helper/clickOutside'
Vue.directive('click-outside', clickOutside)

// tailwind css
import './assets/styles/index.css'
// sweetalert css
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(Vuex)
Vue.use(VueTailwind)

// sweetalert
Vue.use(VueSweetalert2)

// date picker
Vue.use(VCalendar, {
  componentPrefix: 'vc'
})

// axios
Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'http://localhost:8000/'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
