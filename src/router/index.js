/* eslint-disable */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      {
        path: '/profil',
        name: 'Profil',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProfilGuru.vue')
      },
      {
        path: '/tugas',
        name: 'Tugas',
        component: () => import(/* webpackChunkName: "tugas" */ '../views/Tugas.vue')
      },
      {
        path: '/e-learning',
        name: 'Elearning',
        component: () => import(/* webpackChunkName: "elearning" */ '../views/Elearning.vue')
      },
    ]
  },
  {
    path: '/office',
    component: () => import(/* webpackChunkName: "office" */ '../views/admin/Dashboard.vue'),
    children: [
      {
        path: 'dashboard',
        name:'AdminHome',
        component: () => import(/* webpackChunkName: "adminhome" */ '../views/admin/home/Home.vue')
      },
      {
        path: 'sekolah',
        name: 'ListSekolah',
        component: () => import(/* webpackChunkName: "listsekolah" */ '../views/admin/sekolah/data_sekolah/ListSekolah.vue')
      },
      {
        path: 'ruangan',
        name: 'ListRuangan',
        component: () => import(/* webpackChunkName: "listruangan" */ '../views/admin/sekolah/data_ruangan/ListRuangan.vue')
      },
      {
        path: 'tahun-ajaran',
        name: 'ListTahunAjaran',
        component: () => import(/* webpackChunkName: "listtahunajaran" */ '../views/admin/sesi_akedemik/tahun_ajaran/ListTahunAjaran.vue')
      },
      {
        path: 'semester',
        name: 'ListSemester',
        component: () => import(/* webpackChunkName: "listsemester" */ '../views/admin/sesi_akedemik/semester/ListSemester.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//       if (JSON.parse(localStorage.getItem('tokenLog')) == null) {
//         next({
//           path: '/login',
//           params: { nextUrl: to.fullPath }
//         })
//       } else {
//         next()
//       }
//   } else {
//       next()
//   }
//   })
export default router
