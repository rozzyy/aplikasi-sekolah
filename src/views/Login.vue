<template>
  <div
    :style="{
      'background-image': 'url(' + backPic + ')',
      'background-size': 'cover',
      height: '100vh'
    }"
  >
    <div class="container">
      <div class="pt-5">
        <b-row class="pt-5" style="margin-top: 6vh;">
          <b-col></b-col>
          <b-col md="7">
            <b-row>
              <b-col></b-col>
              <b-col md="8" class="bg-login rounded-end py-5">
                <div class="mx-3 text-light text-center">
                  <div>
                    <i class="fa fa-school fa-5x"></i>
                    <h5>SMK MUSDA PERBAUNGAN</h5>
                  </div>
                  <h3>SELAMAT DATANG</h3>
                  <p>Silahkan Login untuk masuk ke portal</p>
                </div>
                <form @submit.prevent="login">
                  <div class="m-2">
                    <vs-input :state="errors.hasOwnProperty('no_induk') ? 'danger' : ''" block placeholder="NIP" v-model="form.no_induk">
                      <template #icon>
                        <i class="fa fa-user"></i>
                      </template>
                    </vs-input>
                    <em v-if="errors.hasOwnProperty('no_induk')" class="text-danger">
                      <small v-for="(item, index) in errors.no_induk" :key="index">
                        {{ item }}
                      </small>
                    </em>
                  </div>
                  <div class="m-2">
                    <vs-input type="password" :state="errors.hasOwnProperty('password') ? 'danger' : ''" block placeholder="Password" v-model="form.password">
                      <template #icon>
                        <i class="fa fa-lock"></i>
                      </template>
                    </vs-input>
                    <em v-if="errors.hasOwnProperty('password')" class="text-danger">
                      <small v-for="(item, index) in errors.password" :key="index">
                        <div>
                          {{ item }}
                        </div>
                      </small>
                    </em>
                  </div>
                  <div class="d-flex justify-content-center">
                    <vs-button gradient block type="submit">
                      Masuk
                    </vs-button>
                  </div>
                  <div class="text-light text-center">
                    Tidak bisa login? Silahkan hubungi admin sekolah.
                  </div>
                </form>
              </b-col>
              <b-col></b-col>
            </b-row>
          </b-col>
          <b-col></b-col>
        </b-row>
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
import axios from 'axios'


export default {
  data() {
    return {
      backPic: backPic,
      form: {
        no_induk: '',
        password: ''
      },
      errors: []
    };
  },
  methods: {
    login () {
        axios.post("/api/auth/login", this.form).then(response => {
            console.log(response.data)
            localStorage.setItem("tokenLog", JSON.stringify(response.data.token))
            localStorage.setItem('role', JSON.stringify(response.data.role))
            localStorage.setItem('user', JSON.stringify(response.data.data))

            if (localStorage.getItem('tokenLog')) {
              if (this.$route.params.nextUrl != null) {
                  this.$router.push(this.$route.params.nextUrl)
              } else {
                  this.$router.push('/')
              }
            }
            this.errors = []
        }).catch(error => {
          if (error.response.status === 400) {
            this.errors = error.response.data.errors
          }
        })
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
