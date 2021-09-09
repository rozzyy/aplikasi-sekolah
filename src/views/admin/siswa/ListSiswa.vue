<template>
  <div>
    <div class="bg-white shadow-md w-full rounded-md">
      <div class="p-4">
        <div class="grid grid-cols-12">
          <div class="text-2xl font-bold mb-5 col-span-4">DAFTAR SISWA</div>
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
                TAMBAH DATA SISWA
              </div>
            </div>
          </div>
        </div>
        <div class="my-3">
          <div class="m-3 grid grid-cols-12">
            <div
              class="col-span-2 bg-blue-400 mt-5 rounded-md text-white font-bold text-center"
            >
              Halaman ke: {{ currentPage }} /
              {{ Math.round(total_page / limit) }}
            </div>
            <div class="col-span-10 text-center">
              <div class="float-right font-bold grid grid-cols-3 gap-2">
                <div
                  class="text-green-600 border-2 border-green-600 px-4 py-2 rounded-md"
                >
                  Total Guru: {{ total_page }}
                </div>
                <div
                  class="text-green-600 border-2 border-green-600 px-4 py-2 rounded-md"
                >
                  Total Guru: {{ total_page }}
                </div>
                <div
                  class="text-green-600 border-2 border-green-600 px-4 py-2 rounded-md"
                >
                  Total Guru: {{ total_page }}
                </div>
              </div>
            </div>
          </div>
          <div class="my-8">
            <div
              v-if="isLoading"
              class="text-center my-56 font-bold text-blue-600"
            >
              <i class="fa fa-spinner animate-spin"></i>
              Loading...
            </div>
            <div class="grid grid-cols-12 gap-4 z-0" v-else>
              <div
                class="col-span-3"
                v-for="(siswa, index) in dataSiswa"
                :key="index"
              >
                <div
                  class="bg-gray-800 rounded-md py-4 transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-lg"
                >
                  <div
                    class="overflow-hidden rounded-full mx-auto mt-3 w-32 h-32"
                  >
                    <img :src="foto" alt="user" class="w-full" />
                  </div>
                  <div class="font-bold text-white text-center text-lg">
                    {{ siswa.nama }}
                  </div>
                  <div class="text-green-300 font-bold text-center mb-3">
                    Siswa Aktif
                  </div>
                  <div class="bg-blue-500 p-3 text-center font-bold text-white">
                    {{ siswa.rombel || 'Kelas belum tersedia.' }}
                  </div>
                  <div class="mt-3 text-center">
                    <button
                      class="font-bold text-white px-8 border-2 hover:bg-white hover:text-gray-800 hover:border-none rounded-md"
                      @click="detail(siswa.id)"
                    >
                      Detail
                    </button>
                  </div>
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
import { mapState } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      hover: "",
      data_guru: [],
      foto: foto,
      showTools: "",
      page: 0,
      limit: 12,
      currentPage: 1
    };
  },
  computed: {
    ...mapState(["dataSiswa", "isLoading", "total_page"])
  },
  mounted() {
    this.$store.dispatch("setDataSiswa", {
      page: this.page,
      limit: this.limit
    });
    console.log(this.dataSiswa);
    console.log("mount");
  },
  methods: {
    tambah() {
      this.$router.push({ name: "AddSiswa" });
    },
    clickTools(value) {
      this.showTools = value;
    },
    closeTools() {
      this.showTools = "";
    },
    nextPage() {
      this.page = this.page + 1;
      this.currentPage = this.page + 1;
      this.$store.dispatch("setDataSiswa", {
        page: this.page,
        limit: this.limit
      });
      console.log(this.total_page / this.limit);
    },
    prevPage() {
      this.page = this.page - 1;
      this.currentPage = this.page + 1;
      this.$store.dispatch("setDataSiswa", {
        page: this.page,
        limit: this.limit
      });
    },
    removeSiswa(id) {
      axios.delete("/api/profil/siswa/" + id).then(response => {
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
        this.$store.dispatch("setDataGuru", {
          page: this.page,
          limit: this.limit
        });
      });
    },
    editGuru(id) {
      this.$router.push({ name: "EditGuru", params: { id: id } });
    },
    detail(id) {
      this.$router.push({ name: "DetailSiswa", params: { id: id } });
    }
  }
};
</script>
