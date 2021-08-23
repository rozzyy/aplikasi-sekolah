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
        }
      },
      {
        path: '/profil',
        name: 'Profil',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProfilGuru.vue'),
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: '/tugas',
        name: 'Tugas',
        component: () => import(/* webpackChunkName: "tugas" */ '../views/Tugas.vue'),
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: '/e-learning',
        name: 'Elearning',
        component: () => import(/* webpackChunkName: "elearning" */ '../views/Elearning.vue'),
        meta: {
          requiresAuth: true,
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
    },
    children: [
      {
        path: 'dashboard',
        name:'AdminHome',
        component: () => import(/* webpackChunkName: "adminhome" */ '../views/admin/home/Home.vue'),
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: 'sekolah',
        name: 'ListSekolah',
        component: () => import(/* webpackChunkName: "listsekolah" */ '../views/admin/sekolah/data_sekolah/ListSekolah.vue'),
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: 'ruangan',
        name: 'ListRuangan',
        component: () => import(/* webpackChunkName: "listruangan" */ '../views/admin/sekolah/data_ruangan/ListRuangan.vue'),
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: 'tahun-ajaran',
        name: 'ListTahunAjaran',
        component: () => import(/* webpackChunkName: "listtahunajaran" */ '../views/admin/sesi_akedemik/tahun_ajaran/ListTahunAjaran.vue'),
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: 'semester',
        name: 'ListSemester',
        component: () => import(/* webpackChunkName: "listsemester" */ '../views/admin/sesi_akedemik/semester/ListSemester.vue'),
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: 'pegawai',
        component: {
          render(c) {
            return c("router-view");
          },
        },
        meta: {
          requiresAuth: true,
        },
        children: [
          {
            path: 'guru',
            name: 'ListGuru',
            component: () => import(/* webpackChunkName: "listguru" */ '../views/admin/pegawai/guru/ListGuru.vue'),
            meta: {
              requiresAuth: true,
            }
          },
          {
            path: 'guru/tambah',
            name: 'AddGuru',
            component: () => import(/* webpackChunkName: "addguru" */ '../views/admin/pegawai/guru/AddGuru.vue'),
            meta: {
              requiresAuth: true,
            }
          },
          {
            path: 'guru/edit/:id',
            name: 'EditGuru',
            component: () => import(/* webpackChunkName: "addguru" */ '../views/admin/pegawai/guru/AddGuru.vue'),
            meta: {
              requiresAuth: true,
            }
          },
          {
            path: 'guru/profil/:id',
            name: 'DetailGuru',
            component: () => import(/* webpackChunkName: "detailguru" */ '../views/admin/pegawai/guru/DetailGuru.vue'),
            meta: {
              requiresAuth: true,
            }
          },
          {
            path: 'staff',
            name: 'ListStaff',
            component: () => import(/* webpackChunkName: "liststaff" */ '../views/admin/pegawai/staff/ListStaff.vue'),
            meta: {
              requiresAuth: true,
            }
          },
          {
            path: 'staff/tambah',
            name: 'AddStaff',
            component: () => import(/* webpackChunkName: "addstaff" */ '../views/admin/pegawai/staff/AddStaff.vue'),
            meta: {
              requiresAuth: true,
            }
          },
          {
            path: 'staff/edit/:id',
            name: 'EditStaff',
            component: () => import(/* webpackChunkName: "editstaff" */ '../views/admin/pegawai/staff/AddStaff.vue'),
            meta: {
              requiresAuth: true,
            }
          },
        ]
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
        },
        children: [
          {
            path: 'jurusan',
            name: 'ListJurusan',
            component: () => import(/* webpackChunkName: "listjurusan" */ '../views/admin/pengaturan_kelas/jurusan/ListJurusan.vue'),
            meta: {
              requiresAuth: true,
            }
          },
          {
            path: 'tingkatan',
            name: 'ListTingkatan',
            component: () => import(/* webpackChunkName: "listtingkatan" */ '../views/admin/pengaturan_kelas/tingkatan/ListTingkatan.vue'),
            meta: {
              requiresAuth: true,
            }
          },
          {
            path: 'kelas',
            name: 'ListKelas',
            component: () => import(/* webpackChunkName: "listkelas" */ '../views/admin/pengaturan_kelas/kelas/ListKelas.vue'),
            meta: {
              requiresAuth: true,
            }
          },
          {
            path: 'rombel',
            name: 'ListRombel',
            component: () => import(/* webpackChunkName: "listrombel" */ '../views/admin/pengaturan_kelas/rombel/ListRombel.vue'),
            meta: {
              requiresAuth: true,
            }
          },
          {
            path: 'pelajaran',
            name: 'ListPelajaran',
            component: () => import(/* webpackChunkName: "listpelajaran" */ '../views/admin/pengaturan_kelas/pelajaran/ListPelajaran.vue'),
            meta: {
              requiresAuth: true,
            }
          },
        ]
      },
      {
        path: 'siswa',
        component: {
          render(c) {
            return c("router-view");
          },
        },
        meta: {
          requiresAuth: true,
        },
        children: [
          {
            path: '/',
            name: 'ListSiswa',
            component: () => import(/* webpackChunkName: "listsiswa" */ '../views/admin/siswa/ListSiswa.vue'),
            meta: {
              requiresAuth: true,
            }
          },
          {
            path: 'profil/:id',
            name: 'DetailSiswa',
            component: () => import(/* webpackChunkName: "detailsiswa" */ '../views/admin/siswa/DetailSiswa.vue'),
            meta: {
              requiresAuth: true,
            }
          },
          {
            path: 'tambah',
            name: 'AddSiswa',
            component: () => import(/* webpackChunkName: "addsiswa" */ '../views/admin/siswa/AddSiswa.vue'),
            meta: {
              requiresAuth: true,
            }
          },
        ]
      },
      {
        path: 'e-learning',
        component: {
          render(c) {
            return c("router-view");
          },
        },
        meta: {
          requiresAuth: true,
        },
        children: [
          {
            path: '/',
            name: 'ListElearning',
            component: () => import(/* webpackChunkName: "addsiswa" */ '../views/admin/elearning/ListElearning.vue'),
            meta: {
              requiresAuth: true,
            }
          },
        ]
      },
      {
        path: 'tugas',
        component: {
          render(c) {
            return c("router-view");
          },
        },
        meta: {
          requiresAuth: true,
        },
        children: [
          {
            path: '/',
            name: 'ListTugas',
            component: () => import(/* webpackChunkName: "addsiswa" */ '../views/admin/tugas/ListTugas.vue'),
            meta: {
              requiresAuth: true,
            }
          },
        ]
      },
      {
        path: 'pengaturan',
        component: {
          render(c) {
            return c("router-view");
          },
        },
        meta: {
          requiresAuth: true,
        },
        children: [
          {
            path: 'staff',
            component: {
              render(c) {
                return c("router-view");
              },
            },
            meta: {
              requiresAuth: true,
            },
            children: [
              {
                path: '/',
                name: 'AkunStaff',
                component: () => import(/* webpackChunkName: "akunstaff" */ '../views/admin/akun/staff/AkunStaff.vue'),
                meta: {
                  requiresAuth: true,
                }
              },
            ]
          },
          {
            path: 'guru',
            component: {
              render(c) {
                return c("router-view");
              },
            },
            meta: {
              requiresAuth: true,
            },
            children: [
              {
                path: '/',
                name: 'AkunGuru',
                component: () => import(/* webpackChunkName: "akunguru" */ '../views/admin/akun/guru/AkunGuru.vue'),
                meta: {
                  requiresAuth: true,
                }
              },
            ]
          },
          {
            path: 'siswa',
            component: {
              render(c) {
                return c("router-view");
              },
            },
            meta: {
              requiresAuth: true,
            },
            children: [
              {
                path: '/',
                name: 'AkunSiswa',
                component: () => import(/* webpackChunkName: "akunsiswa" */ '../views/admin/akun/siswa/AkunSiswa.vue'),
                meta: {
                  requiresAuth: true,
                }
              },
            ]
          }
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
