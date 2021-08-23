<template>
  <div class="flex">
    <div class="w-16 fixed z-50">
      <div class="bg-indigo-800 h-screen pt-2">
        <nav class="text-white">
          <ul>
            <li
              v-for="(item, index) in menu"
              :key="index"
              class="hover:text-gray-300 cursor-pointer mt-8 text-center"
            >
              <div @mouseover="hover = item.name" @mouseleave="hover = ''" :class="{'border-l-4': $route.path === item.path, 'border-blue-300': $route.path === item.path, 'rounded-l-sm': $route.path === item.path}">
                <router-link :to="item.path">
                  <i :class="item.icon"></i>
                </router-link>
              </div>
              <transition
                enter-active-class="transition-all duration-500 ease-out"
                leave-active-class="transition-all duration-200 ease-out"
                leave-class="transform translate-x-10"
                enter-class="transform translate-x-10"
              >
                <div
                  v-if="hover === item.name"
                  class="fixed bg-gray-900 ml-16 -mt-8 rounded-md shadow-md"
                >
                  <div class="px-8 font-bold">
                    {{ item.name }}
                  </div>
                </div>
              </transition>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="w-11/12">
      <div class="fixed w-full z-40">
        <div :class="{'bg-transparent': scrollPosition == null,  'py-2': true, 'text-white': true, 'bg-indigo-800': scrollPosition > 50 || $route.name !== 'Home', 'transition-all': true, 'duration-300': true, 'ease-out': true}">
          <div class="grid grid-cols-2">
            <div class="pl-16 ml-2 mt-3 text-white font-bold">
              <i class="fa fa-building"></i> SMK MUSDA PERBAUNGAN
            </div>
            <div>
              <div class="float-right flex">
                <div class="text-white mt-3 mx-5">
                  <i class="fa fa-bell text-2xl"></i>
                </div>
                <div
                  class="bg-gray-300 rounded-full h-10 w-10 mx-3 text-center hover:bg-gray-500 cursor-pointer"
                  @click="user"
                >
                  <i class="fa fa-user text-black mt-3"></i>
                </div>
                <transition enter-active-class="transition-all duration-300 ease-out" leave-class="transform translate-y-10" leave-active-class="transition-all duration-300 ease-out" enter-class="transform translate-y-10">
                  <div
                    class="absolute -ml-48 w-1/5 text-black bg-gray-300 rounded-md shadow-md"
                    v-if="settingShow"
                  >
                    <div
                      class="hover:bg-gray-600 rounded-t-md p-3 cursor-pointer font-bold hover:text-gray-300"
                    >
                      <i class="fa fa-cog"></i> Pengaturan
                    </div>
                    <div
                      class="hover:bg-gray-600 rounded-b-md p-3 cursor-pointer font-bold hover:text-gray-300"
                      @click="logout"
                    >
                      <i class="fa fa-power-off"></i> Keluar
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full pl-16 z-0 absolute">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
// eslint-disable vue/no-unused-vars
// eslint-disable-line no-unused-vars

export default {
  data() {
    return {
      active2: false,
      input1: "",
      input2: "",
      checkbox1: false,
      hover: "",
      settingShow: false,
      menu: [
        {
          name: "Home",
          icon: "fa fa-home fa-2x",
          path: '/'
        },
        {
          name: "Profil",
          icon: "fa fa-user fa-2x",
          path: '/profil'
        },
        {
          name: "E-Learning",
          icon: "fa fa-graduation-cap fa-2x",
          path: '/e-learning'
        },
        {
          name: "Tugas",
          icon: "fa fa-book fa-2x",
          path: '/tugas'
        },
        {
          name: "Jadwal",
          icon: "fa fa-calendar-alt fa-2x",
          path: '/jadwal'
        }
      ],
      scrollPosition: null
    };
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    openLoading() {
      const loading = this.$vs.loading({
        text: "Loading...",
        opacity: 1,
        type: "corners"
      });
      localStorage.clear();
      this.$router.push({ name: "Login" });
      this.active2 = false;
      loading.close();
    },
    user() {
      if (this.settingShow === false) {
        this.settingShow = true;
      } else {
        this.settingShow = false;
      }
    },
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'Login' })
    },
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
