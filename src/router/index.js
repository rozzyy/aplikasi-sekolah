/* eslint-disable */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue'),
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
        meta: {
          requiresAuth: true,
          access: ['ortu']
        }
      },
      {
        path: '/profil',
        name: 'Profil',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProfilGuru.vue'),
        meta: {
          requiresAuth: true,
          access: ['ortu']
        }
      },
      {
        path: '/tugas',
        name: 'Tugas',
        component: () => import(/* webpackChunkName: "tugas" */ '../views/Tugas.vue'),
        meta: {
          requiresAuth: true,
          access: ['ortu']
        }
      },
      {
        path: '/e-learning',
        name: 'Elearning',
        component: () => import(/* webpackChunkName: "elearning" */ '../views/Elearning.vue'),
        meta: {
          requiresAuth: true,
          access: ['ortu']
        }
      },
    ]
  },
  {
    path: '/office',
    redirect: '/office/dashboard',
    component: () => import(/* webpackChunkName: "office" */ '../views/admin/Dashboard.vue'),
    meta: {
      requiresAuth: true,
      access: ['siswa']
    },
    children: [
      {
        path: 'dashboard',
        name:'AdminHome',
        component: () => import(/* webpackChunkName: "adminhome" */ '../views/admin/home/Home.vue'),
        meta: {
          requiresAuth: true,
          access: ['siswa']
        }
      },
      {
        path: 'sekolah',
        name: 'ListSekolah',
        component: () => import(/* webpackChunkName: "listsekolah" */ '../views/admin/sekolah/data_sekolah/ListSekolah.vue'),
        meta: {
          requiresAuth: true,
          access: ['siswa']
        }
      },
      {
        path: 'ruangan',
        name: 'ListRuangan',
        component: () => import(/* webpackChunkName: "listruangan" */ '../views/admin/sekolah/data_ruangan/ListRuangan.vue'),
        meta: {
          requiresAuth: true,
          access: ['siswa']
        }
      },
      {
        path: 'tahun-ajaran',
        name: 'ListTahunAjaran',
        component: () => import(/* webpackChunkName: "listtahunajaran" */ '../views/admin/sesi_akedemik/tahun_ajaran/ListTahunAjaran.vue'),
        meta: {
          requiresAuth: true,
          access: ['siswa']
        }
      },
      {
        path: 'semester',
        name: 'ListSemester',
        component: () => import(/* webpackChunkName: "listsemester" */ '../views/admin/sesi_akedemik/semester/ListSemester.vue'),
        meta: {
          requiresAuth: true,
          access: ['siswa']
        }
      },
      {
        path: 'pengaturan-kelas',
        component: {
          render(c) {
            return c("router-view");
          },
        },
        meta: {
          requiresAuth: true,
          access: ['siswa']
        },
        children: [
          {
            path: 'jurusan',
            name: 'ListJurusan',
            component: () => import(/* webpackChunkName: "listjurusan" */ '../views/admin/pengaturan_kelas/jurusan/ListJurusan.vue'),
            meta: {
              requiresAuth: true,
              access: ['siswa']
            }
          },
          {
            path: 'tingkatan',
            name: 'ListTingkatan',
            component: () => import(/* webpackChunkName: "listtingkatan" */ '../views/admin/pengaturan_kelas/tingkatan/ListTingkatan.vue'),
            meta: {
              requiresAuth: true,
              access: ['siswa']
            }
          },
          {
            path: 'kelas',
            name: 'ListKelas',
            component: () => import(/* webpackChunkName: "listkelas" */ '../views/admin/pengaturan_kelas/kelas/ListKelas.vue'),
            meta: {
              requiresAuth: true,
              access: ['siswa']
            }
          },
          {
            path: 'rombel',
            name: 'ListRombel',
            component: () => import(/* webpackChunkName: "listrombel" */ '../views/admin/pengaturan_kelas/rombel/ListRombel.vue'),
            meta: {
              requiresAuth: true,
              access: ['siswa']
            }
          },
          {
            path: 'pelajaran',
            name: 'ListPelajaran',
            component: () => import(/* webpackChunkName: "listpelajaran" */ '../views/admin/pengaturan_kelas/pelajaran/ListPelajaran.vue'),
            meta: {
              requiresAuth: true,
              access: ['siswa']
            }
          },
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (JSON.parse(localStorage.getItem('tokenLog')) == null) {
        next({
          path: '/login',
          params: { nextUrl: to.fullPath }
        })
      } else {
        next()
      }
  } else {
      next()
  }
  })
export default router
