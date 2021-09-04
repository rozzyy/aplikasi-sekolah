<template>
  <div>
    <nav class="bg-gray-800 z-40 w-full pb-2 px-2 pt-1 fixed">
      <div class="grid grid-cols-12 shadow-md">
        <div class="col-span-6">
          <div class="grid grid-cols-12 text-white py-1">
            <div class="col-span-1">
              <i class="fab fa-500px fa-3x"></i>
            </div>
            <div class="col-span-9 font-bold">
              <div>
                SMK MUSDA
              </div>
              <div>
                PERBAUNGAN
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-6">
          <div class="grid grid-cols-12">
            <div class="col-span-8">
              <div class="bg-gray-400 overflow-hidden rounded-full h-12 w-12 float-right m-1">
                <div class="text-center">
                  <img :src="foto" alt="userIcon" class="w-full">
                </div>
              </div>
            </div>
            <div class="col-span-3 text-white">
              <div class="m-1">
                <div class="font-bold">{{ user.nama }}</div>
                <small>{{ role[0].toUpperCase() }}</small>
              </div>
            </div>
            <div class="col-span-1">
              <div
                class="m-4 cursor-pointer transition duration-300 ease-in transform hover:scale-125"
                @click="showSetting"
              >
                <i class="fa fa-ellipsis-v text-white"></i>
              </div>
              <transition
                enter-active-class="transition-all duration-300 ease-out"
                leave-class="transform translate-y-10"
                leave-active-class="transition-all duration-300 ease-out"
                enter-class="transform translate-y-10"
              >
                <div
                  class="bg-gray-100 absolute mt-1 -ml-64 w-3/12 shadow-md rounded z-40"
                  v-if="showSet"
                  v-click-outside="close"
                >
                  <ul class="cursor-pointer">
                    <li class="py-3 px-8 hover:bg-gray-300">
                      <i class="fa fa-file-image mr-2"></i> Rubah Foto Profil
                    </li>
                    <li class="py-3 px-8 hover:bg-gray-300">
                      <i class="fa fa-lock mr-2"></i> Rubah Kata Sandi
                    </li>
                    <li class="py-3 px-8 hover:bg-gray-300" @click="logout">
                      <i class="fa fa-power-off mr-2"></i> Logout
                    </li>
                  </ul>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="flex pt-16">
      <nav class="overflow-auto bg-indigo-700 text-white w-56 fixed h-full">
        <ul>
          <li class="my-1 cursor-pointer" @click="notDropdown">
            <router-link
              :class="{
                grid: true,
                'grid-cols-12': true,
                'hover:bg-indigo-900': true,
                'bg-indigo-900': $route.name === 'AdminHome',
                'p-2': true,
                rounded: true
              }"
              to="/office/dashboard"
            >
              <div class="col-span-2">
                <i class="fa fa-tachometer-alt"></i>
              </div>
              <div class="col-span-10 font-bold">
                Dashboard
              </div>
            </router-link>
          </li>
          <li
            class="cursor-pointer my-2"
            v-for="(item, index) in menu"
            :key="index"
          >
            <div
              :class="{
                grid: true,
                'grid-cols-12': true,
                'p-2': true,
                rounded: true,
                'hover:bg-indigo-900': true,
                'bg-indigo-900': hide == index + 1
              }"
              @click="dropdown(index + 1)"
            >
              <div class="col-span-2">
                <i :class="item.icon"></i>
              </div>
              <div class="col-span-10 font-bold">
                {{ item.name }}
                <i
                  :class="{
                    fa: true,
                    'fa-angle-right': true,
                    'float-right': true,
                    transform: true,
                    'rotate-90': hide == index + 1,
                    'transition-all': true,
                    'duration-200': true,
                    'ease-in': true
                  }"
                ></i>
              </div>
            </div>
            <ul :class="{'bg-indigo-800': true, 'hidden': hide !== index + 1}">
              <li
                :class="{
                  'p-3': true,
                  'ml-3': true,
                  'font-bold': true,
                  'transition-all': true,
                  'duration-300': true,
                  'ease-in': true,
                  transform: true,
                  'hover:translate-x-2': true,
                  'translate-x-2': $route.path === children.path
                }"
                v-for="(children, index) in item.children"
                :key="index"
              >
                <router-link :to="children.path">
                  <i class="fa fa-angle-right"></i> {{ children.name }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="ml-48 w-11/12">
        <div class="flex flex-col ml-12 sm:ml-14 mr-3 my-5">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
// eslint-disable vue/no-unused-vars
// eslint-disable-line no-unused-vars
import foto from '../../assets/user3.webp'

export default {
  data() {
    return {
      foto: foto,
      menuName: "",
      showSet: false,
      user: '',
      role: '',
      menu: [
        // {
        //   name: "Sekolah",
        //   icon: "fa fa-building",
        //   children: [
        //     {
        //       name: "Data Sekolah",
        //       path: "/office/sekolah"
        //     },
        //     {
        //       name: "Data Ruangan",
        //       path: "/office/ruangan"
        //     }
        //   ]
        // },
        {
          name: "Sesi Akademik",
          icon: "fa fa-calendar-alt",
          children: [
            {
              name: "Tahun Ajaran",
              path: "/office/tahun-ajaran"
            },
            {
              name: "Semester",
              path: "/office/semester"
            }
          ]
        },
        {
          name: "Pengaturan Kelas",
          icon: "fa fa-door-open",
          children: [
            {
              name: "Daftar Jurusan",
              path: "/office/pengaturan-kelas/jurusan"
            },
            {
              name: "Daftar Tingkatan",
              path: "/office/pengaturan-kelas/tingkatan"
            },
            {
              name: "Daftar Kelas",
              path: "/office/pengaturan-kelas/kelas"
            },
            {
              name: "Daftar Rombel",
              path: "/office/pengaturan-kelas/rombel"
            },
            {
              name: "Jadwal Pelajaran",
              path: "/office/pengaturan-kelas/pelajaran"
            }
          ]
        },
        {
          name: "Staff & Guru",
          icon: "fa fa-user-tie",
          children: [
            {
              name: "Daftar Guru",
              path: "/office/pegawai/guru"
            },
            {
              name: "Daftar Staff",
              path: "/office/pegawai/staff"
            }
          ]
        },
        {
          name: "Siswa",
          icon: "fa fa-user-graduate",
          children: [
            {
              name: "Daftar Siswa",
              path: "/office/siswa"
            }
          ]
        },
        {
          name: "LMS",
          icon: "fa fa-clipboard",
          children: [
            {
              name: "E-Learning",
              path: "/office/e-learning"
            },
            {
              name: "E-Tugas",
              path: "/office/tugas"
            }
          ]
        },
        {
          name: "Pengaturan",
          icon: "fa fa-cogs",
          children: [
            // {
            //   name: "Profil Pengguna",
            //   path: "/office/pengaturan/profil"
            // },
            {
              name: "Akun Staff",
              path: "/office/pengaturan/staff"
            },
            {
              name: "Akun Guru",
              path: "/office/pengaturan/guru"
            },
            {
              name: "Akun Siswa",
              path: "/office/pengaturan/siswa"
            }
          ]
        }
      ],
      hide: '',
      hideArr: []
    };
  },
  mounted() { 
    this.$on('update-side', (value) => {
      if (this.hideArr[0] == value) {
        if (this.hideArr.length == 1) {
          this.hide = value
          this.hideArr.push(value)
        } else {
          this.hide = ''
          this.hideArr = []
        }
      } else {
        this.hide = value
        this.hideArr = []
      }
    })
    this.user = JSON.parse(localStorage.getItem('user'))
    this.role = JSON.parse(localStorage.getItem('role'))
  },
  methods: {
    dropdown(value) {
      this.hideArr.push(value)
      this.$emit('update-side', value)
    },
    notDropdown() {
      this.menuName = "";
    },
    showSetting() {
      if (this.showSet === false) {
        this.showSet = true;
      } else {
        this.showSet = false;
      }
    },
    close() {
      if (this.showSet === true) {
        this.showSet = false;
      } else {
        this.showSet = true;
      }
    },
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
