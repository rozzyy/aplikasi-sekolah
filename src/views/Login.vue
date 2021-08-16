<template>
  <div
    :style="{
      'background-image': 'url(' + backPic + ')',
      'background-size': 'cover',
      height: '100vh'
    }"
  >
    <div class="flex flex-wrap">
      <div
        class="bg-gray-800 mx-auto mt-32 w-1/3 rounded-md px-8 py-12 text-white"
      >
        <div class="text-center text-xl font-bold">SELAMAT DATANG</div>
        <div class="text-center font-bold">
          Login ke akun office SMK MUSDA PERBAUNGAN
        </div>
        <form @submit.prevent="login">
          <div class="m-3">
            <label for="nip">NIP/NISN</label>
            <div class="text-black">
              <div class="inline-flex w-full">
                <div
                  class="bg-gray-300 rounded-l-md p-3 border-none border-gray-500"
                >
                  <i class="fa fa-user text-gray-700"></i>
                </div>
                <input
                  type="text"
                  class="bg-gray-300 w-full border-none rounded-r-md focus:outline-none p-2"
                  v-model="form.no_induk"
                />
              </div>
            </div>
            <em class="text-red-600" v-if="errors.hasOwnProperty('no_induk')"
              >
              <div v-for="(item, index) in errors.no_induk" :key="index">
                {{ item }}
              </div>
            </em
            >
          </div>
          <div class="m-3">
            <label for="nip">PASSWORD</label>
            <div class="text-black">
              <div class="inline-flex w-full">
                <div
                  class="bg-gray-300 rounded-l-md p-3 border-none border-gray-500"
                >
                  <i class="fa fa-lock text-gray-700"></i>
                </div>
                <input
                  type="password"
                  class="bg-gray-300 w-full border-none rounded-r-md focus:outline-none p-2"
                  v-model="form.password"
                />
              </div>
            </div>
            <em class="text-red-600" v-if="errors.hasOwnProperty('password')"
              >
              <div v-for="(item, index) in errors.password" :key="index">
                {{ item }}
              </div>
            </em
            >
          </div>
          <div class="mx-3 my-4">
            <button
              type="submit"
              class="bg-blue-500 w-full p-3 font-bold hover:bg-blue-600 rounded-md focus:outline-none"
            >
              <i class="fa fa-spinner animate-spin" v-if="isLoading"></i>
              Masuk
            </button>
          </div>
        </form>
        <div class="m-3">
          Tidak bisa login ? Silahkan hubungi admin sekolah.
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

import backPic from "@/assets/loginback.jpeg";
import axios from "axios";

export default {
  data() {
    return {
      backPic: backPic,
      form: {
        no_induk: "",
        password: ""
      },
      errors: [],
      isLoading: false
    };
  },
  methods: {
    login() {
      this.errors = ''
      this.isLoading = true
      axios
        .post("/api/auth/login", this.form)
        .then(response => {
          this.isLoading = false
          console.log(response.data);
          localStorage.setItem("tokenLog", JSON.stringify(response.data.token));
          localStorage.setItem("role", JSON.stringify(response.data.role));
          localStorage.setItem("user", JSON.stringify(response.data.data));

          if (localStorage.getItem("tokenLog")) {
            if (this.$route.params.nextUrl != null) {
              this.$router.push(this.$route.params.nextUrl);
            } else {
              if (response.data.role[0] === 'siswa') {
                this.$router.push({ name: 'AdminHome' })
              } else {
                this.$router.push({ name: 'Home' })
              }
            }
          }
          this.errors = [];
        })
        .catch(error => {
          this.isLoading = false
          if (error.response.status === 400) {
            this.errors = error.response.data.errors;
          }
        });
    }
  }
};
</script>

<style scoped>
.bg-custom-login {
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #191b70 0%, #2b5d86 100%);
}
.bg-login {
  background-color: #252525;
}
</style>
