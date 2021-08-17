<template>
  <div>
    <div class="bg-white shadow-md w-full rounded-md">
      <div class="p-4">
        <div class="grid grid-cols-12">
          <div class="text-2xl font-bold mb-5 col-span-4">DAFTAR GURU</div>
          <div class="col-span-7">
            <div class="inline-flex w-full ">
              <div
                class="bg-gray-300 rounded-l-md p-3 border-none border-gray-500"
              >
                <i class="fa fa-search text-gray-700"></i>
              </div>
              <input
                type="text"
                class="bg-gray-300 w-full border-none focus:outline-none p-2"
              />
              <button
                class="bg-blue-500 rounded-r-md px-3 text-white hover:bg-blue-600 font-bold focus:outline-none"
              >
                Cari
              </button>
            </div>
          </div>
          <div class="col-span-1">
            <div
              class="float-right z-10"
              @mouseover="hover = true"
              @mouseleave="hover = false"
            >
              <button
                class="bg-green-500 font-bold text-white rounded-full w-12 h-12 hover:bg-green-600 shadow-md focus:outline-none fixed -ml-12 transition duration-300 ease-out transform hover:-translate-y-2"
                @click="tambah"
              >
                <i class="fa fa-plus"></i>
              </button>
              <div
                class="-ml-48 mt-10 bg-black text-white font-bold px-2 rounded-md fixed"
                v-if="hover"
              >
                TAMBAH DATA GURU
              </div>
            </div>
          </div>
        </div>
        <div class="my-3">
          <div class="my-8">
            <div class="grid grid-cols-12" v-if="dataGuru">
              <div
                class="col-span-3"
                v-for="(guru, index) in dataGuru"
                :key="index"
              >
                <div
                  class="rounded-lg overflow-hidden shadow-lg m-3 transition duration-300 ease-out transform hover:-translate-y-2 cursor-pointer border border-gray-300"
                >
                  <div class="absolute h-full bg-gradient-to-t from-gray-900">
                    <transition
                      enter-active-class="transition-all duration-300 ease-out"
                      leave-active-class="transition-all duration-300 ease-out"
                      leave-class="transform translate-x-10"
                      enter-class="transform translate-x-10"
                    >
                      <div
                        class="inline-flex py-2 absolute mx-8 rounded-md w-7/12"
                        v-if="showTools == guru.nip"
                        v-click-outside="closeTools"
                      >
                        <div class="bg-blue-500 rounded-l-md hover:bg-blue-800">
                          <div class="text-center w-2/5 py-1 px-4">
                            <i class="fa fa-edit text-white"></i>
                          </div>
                        </div>
                        <div class="bg-red-500 rounded-r-md hover:bg-red-800">
                          <div class="text-center w-2/5 py-1 px-4">
                            <i class="fa fa-trash-alt text-white"></i>
                          </div>
                        </div>
                      </div>
                    </transition>
                    <div class="grid grid-cols-12">
                      <i
                        class="fa fa-bars m-3 text-gray-200 font-bold transform hover:scale-125 col-span-2"
                        @click="clickTools(guru.nip)"
                      ></i>
                    </div>
                    <div class="text-center" style="margin-top: 150px;">
                      <div class="text-white text-lg font-bold text-center">
                        {{ guru.nama }}
                      </div>
                      <div class="text-center font-bold text-green-500">
                        {{ guru.status_pegawai }}
                      </div>
                      <button
                        class="bg-teal-500 text-white font-bold px-6 rounded-md hover:bg-teal-700 transition-all duration-300 ease-out transform hover:translate-y-2"
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                  <img
                    class="w-full"
                    :src="foto"
                    alt="Sunset in the mountains"
                    style="height: 300px"
                  />
                </div>
              </div>
            </div>
            <div v-else>
              Loading...
            </div>
          </div>
          <div class="text-center">
            <div class="inline-flex">
              <button
                class="bg-blue-500 p-2 rounded-l-md text-white font-bold hover:bg-blue-600 focus:outline-none"
              >
                Prev
              </button>
              <button
                class="bg-blue-500 p-2 rounded-r-md text-white font-bold hover:bg-blue-600 focus:outline-none"
              >
                Next
              </button>
            </div>
          </div>
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
import axios from "axios";
import foto from "@/assets/user3.webp";
import { mapState } from 'vuex'

export default {
  data() {
    return {
      hover: "",
      data_guru: [],
      foto: foto,
      showTools: ""
    };
  },
  computed: {
    ...mapState([
      'dataGuru'
    ])
  },
  mounted() {
    this.$store.dispatch('setDataGuru')
  },
  methods: {
    tambah() {
      this.$router.push({ name: "AddGuru" });
    },
    clickTools(value) {
      this.showTools = value;
    },
    closeTools() {
      this.showTools = "";
    }
  }
};
</script>
