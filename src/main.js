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
import vSelect from 'vue-select'
import { Form } from 'vform' 
import VueApexCharts from 'vue-apexcharts'
import VueTailwindDatepicker from '@coding-wisely/vue-tailwind-datepicker'

//date picker
Vue.use(VueTailwindDatepicker)

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

// vue select
Vue.component('v-select', vSelect)

// axios
Vue.use(VueAxios, axios)

// window form
window.Form = Form

// apexchart
Vue.use(VueApexCharts)
Vue.component('apexcharts', VueApexCharts)

axios.defaults.baseURL = process.env.VUE_APP_ROOT_API

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
