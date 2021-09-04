<template>
  <div>
    <div class="bg-white shadow-md w-full rounded-md">
      <div class="p-4">
        <div class="grid grid-cols-12">
          <div class="text-2xl font-bold mb-5 col-span-4">DAFTAR STAFF</div>
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
                v-model="q"
              />
              <button
                class="bg-blue-500 rounded-r-md px-3 text-white hover:bg-blue-600 font-bold focus:outline-none"
                @click="search"
              >
                Cari
              </button>
            </div>
          </div>
          <div class="col-span-1">
            <div
              class="float-right"
              @mouseover="hover = true"
              @mouseleave="hover = false"
            >
              <button
                class="bg-green-500 font-bold text-white rounded-full w-12 h-12 hover:bg-green-600 shadow-md focus:outline-none fixed -ml-12 transition duration-300 ease-out transform hover:-translate-y-2 z-40"
                @click="tambah"
              >
                <i class="fa fa-plus"></i>
              </button>
              <div
                class="-ml-48 mt-10 bg-black text-white font-bold px-2 rounded-md fixed z-40"
                v-if="hover"
              >
                TAMBAH DATA STAFF
              </div>
            </div>
          </div>
        </div>
        <div class="my-3">
          <div class="m-3 grid grid-cols-12">
            <div class="col-span-2">
              Halaman ke: {{ currentPage }} / {{ Math.round(total_page / limit) }}
            </div>
            <div class="col-span-10 text-center">
              <div class="float-right font-bold grid grid-cols-3 gap-2">
                <div class="text-white bg-green-600 p-2 rounded-md">
                  Total Staff: {{ total_page }}
                </div>
                <div class="text-white bg-green-600 p-2 rounded-md">
                  Total Laki-laki: {{ total_page }}
                </div>
                <div class="text-white bg-green-600 p-2 rounded-md">
                  Total Perempuan: {{ total_page }}
                </div>
              </div>
            </div>
          </div>
          <div class="my-8">
            <div v-if="isLoading" class="text-center my-56 font-bold text-blue-600">
              <i class="fa fa-spinner animate-spin"></i>
              Loading...
            </div>
            <div class="grid grid-cols-12 z-0" v-else>
              <div v-if="!dataStaff">
                No Result.
              </div>
              <div
                class="col-span-3"
                v-for="(staff, index) in dataStaff"
                :key="index"
                v-else
              >
                <div
                  class="rounded-lg overflow-hidden shadow-lg m-3 transition duration-300 ease-out transform hover:-translate-y-2 cursor-pointer border border-gray-300"
                >
                  <div class="absolute h-full w-full bg-gradient-to-t from-gray-900">
                    <transition
                      enter-active-class="transition-all duration-300 ease-out"
                      leave-active-class="transition-all duration-300 ease-out"
                      leave-class="transform translate-x-10"
                      enter-class="transform translate-x-10"
                    >
                      <div
                        class="inline-flex py-2 absolute mx-8 rounded-md w-7/12"
                        v-if="showTools == staff.id"
                        v-click-outside="closeTools"
                      >
                        <div class="bg-blue-500 rounded-l-md hover:bg-blue-800">
                          <div class="text-center w-2/5 py-1 px-4" @click="editStaff(staff.id)">
                            <i class="fa fa-edit text-white"></i>
                          </div>
                        </div>
                        <div class="bg-red-500 rounded-r-md hover:bg-red-800">
                          <div class="text-center w-2/5 py-1 px-4" @click="removeStaff(staff.id)">
                            <i class="fa fa-trash-alt text-white"></i>
                          </div>
                        </div>
                      </div>
                    </transition>
                    <div class="grid grid-cols-12">
                      <i
                        class="fa fa-bars m-3 text-gray-200 font-bold transform hover:scale-125 col-span-2"
                        @click="clickTools(staff.id)"
                      ></i>
                    </div>
                    <div class="text-center" style="margin-top: 150px;">
                      <div class="text-white text-lg font-bold text-center">
                        {{ staff.nama }}
                      </div>
                      <div class="text-center font-bold text-green-500">
                        {{ staff.status_pegawai }}
                      </div>
                      <button
                        class="bg-teal-500 text-white font-bold px-6 rounded-md hover:bg-teal-700 transition-all duration-300 ease-out transform hover:translate-y-2"
                        @click="detail(staff.id)"
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
          </div>
          <div class="text-center">
            <div class="inline-flex">
              <button
                class="bg-blue-500 p-2 rounded-l-md text-white font-bold hover:bg-blue-600 focus:outline-none"
                @click="prevPage"
              >
                Prev
              </button>
              <button
                class="bg-blue-500 p-2 rounded-r-md text-white font-bold hover:bg-blue-600 focus:outline-none"
                @click="nextPage"
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
import foto from "@/assets/user3.webp";
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  data() {
    return {
      hover: "",
      foto: foto,
      showTools: "",
      page: 0,
      limit: 12,
      currentPage: 1,
      q: ''
    };
  },
  computed: {
    ...mapState([
      'dataStaff',
      'isLoading',
      'total_page'
    ])
  },
  mounted() {
    this.$store.dispatch('setDataStaff', { page: this.page, limit: this.limit })
  },
  methods: {
    tambah() {
      this.$router.push({ name: "AddStaff" });
    },
    clickTools(value) {
      this.showTools = value;
    },
    closeTools() {
      this.showTools = "";
    },
    nextPage () {
      this.page = this.page + 1
      this.currentPage = this.page + 1
      this.$store.dispatch('setDataStaff', { page: this.page, limit: this.limit })
    },
    prevPage () {
      this.page = this.page - 1
      this.currentPage = this.page + 1
      this.$store.dispatch('setDataStaff', { page: this.page, limit: this.limit })
    },
    search () {
       this.$store.dispatch('setDataStaff', { page: this.page, limit: this.limit, q:this.q })
    },
    removeStaff(id) {
      axios.delete("/api/profil/pegawai/" + id).then(response => {
        this.$swal({
          icon: "success",
          title: "Data berhasil dihapus",
          text: "Data yang dihapus tidak dapat dikembalikan.",
          type: "success",
          confirmButtonClass: "btn btn-info",
          showConfirmButton: true,
          confirmButtonText: "OKE",
          showCloseButton: true,
          timer: 5000
        });
        this.$store.dispatch('setDataStaff', { page: this.page, limit: this.limit })
      });
    },
    editStaff (id) {
      this.$router.push({ name: 'EditStaff', params: { id: id }})
    },
    detail (id) {
      this.$router.push({ name: 'DetailGuru', params: { id: id }})
    }
  }
};
</script>
