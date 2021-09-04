<template>
  <div>
    <div class="bg-white p-5 rounded-lg shadow-md">
      <div class="my-4 grid grid-cols-12">
        <div class="text-xl font-bold col-span-6">
          Daftar Jurusan Sekolah
        </div>
        <div class="col-span-6">
          <div class="float-right">
            <button
              class="bg-blue-400 p-2 mx-2 rounded-lg text-white font-bold focus:outline-none hover:bg-blue-500 hover:shadow-md transition-all duration-300 ease-out transform hover:-translate-y-2"
              @click="loadingData"
            >
              <i class="fa fa-redo-alt"></i> Muat Ulang
            </button>
            <button
              class=" bg-green-500 hover:shadow-md hover:bg-green-600 rounded-lg p-2 text-white font-bold focus:outline-none transition-all duration-300 ease-out transform hover:-translate-y-2"
              @click="modal"
            >
              <i class="fa fa-plus"></i> Tambah Jurusan
            </button>
          </div>
        </div>
      </div>
      <div class="rounded-lg">
        <div>
          <table class="min-w-full divide-y border">
            <thead class="bg-gray-300">
              <tr>
                <th class="text-left px-6 uppercase">No.</th>
                <th class="text-left px-6 uppercase">JURUSAN</th>
                <th class="text-left px-6 uppercase">AKREDITASI</th>
                <th class="text-left px-6 uppercase">Aksi</th>
              </tr>
            </thead>
            <tr v-if="Jurusan.isLoading" class="text-center">
              <td colspan="4" class="text-teal-500 font-bold">
                <i class="fa fa-spinner animate-spin"></i>
                Loading...
              </td>
            </tr>
            <tbody class="bg-white divide-y" v-else-if="Jurusan.total_page !== 0">
              <tr v-for="(item, index) in Jurusan.jurusan" :key="index" class="cursor-pointer hover:bg-gray-200">
                <td
                  class="px-6 py-2 whitespace-no-wrap text-center"
                  style="width: 50px;"
                >
                  {{ index + 1 }}
                </td>
                <td class="px-6 py-2 whitespace-no-wrap">{{ item.nama }}</td>
                <td class="px-6 py-2 whitespace-no-wrap">
                  {{ item.akreditasi }}
                </td>
                <td class="px-6 py-2 whitespace-no-wrap" style="width: 50px">
                  <button
                    class="mr-2 bg-blue-600 hover:bg-blue-700 py-1 px-2 rounded-full text-white focus:outline-none transition-all duration-300 ease-out transform hover:-translate-y-1"
                    @click="edit(item.id)"
                  >
                    <i class="fa fa-edit"></i>
                  </button>
                  <button
                    class="bg-red-600 hover:bg-red-700 py-1 px-2 rounded-full text-white focus:outline-none transition-all duration-300 ease-out transform hover:-translate-y-1"
                    @click="remove(item.id)"
                  >
                    <i class="fa fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <tr v-else>
              <td colspan="4" class="text-center font-bold text-red-400">
                Data belum tersedia.
              </td>
            </tr>
          </table>

          <div class="text-center my-2">
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
      <transition
        enter-active-class="transition duration-100 ease-out"
        leave-active-class="transition duration-100 ease-out"
      >
        <div v-if="showModal">
          <div
            class="fixed top-0 right-0 bg-black opacity-50 overflow-auto z-40 w-full h-full cursor-pointer"
            @click="closeModal"
          ></div>
          <transition
            enter-active-class="transition duration-500 ease-out"
            leave-active-class="transition duration-500 ease-out"
            enter-from-class="transform translate-y-10"
            enter-to-class="transform translate-y-10"
            appear
          >
            <div
              class="z-40 w-2/5 absolute -mt-56 flex place-content-center ml-24"
            >
              <div class="bg-white rounded-lg w-full">
                <div class="grid grid-cols-12">
                  <div class="col-span-6">
                    <div class="text-xl m-3 font-bold">
                      {{ editMode ? "Edit Jurusan" : "Tambah Jurusan Baru" }}
                    </div>
                  </div>
                  <div class="col-span-6">
                    <button
                      class="m-4 float-right cursor-pointer transition duration-300 ease-out transform hover:scale-110"
                      @click="closeModal"
                    >
                      <i class="fa fa-times"></i>
                    </button>
                  </div>
                </div>
                <form @submit.prevent="editMode ? update(id) : store()">
                  <div class="m-4">
                    <label for="nama" class="font-bold">
                      Jurusan
                    </label>
                    <div>
                      <select
                        id="cars"
                        v-model="form.nama"
                        class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                        form="form"
                      >
                        <option value="">-Pilih Jurusan-</option>
                        <option value="Teknik Kendaraan Ringan (TKR)"
                          >Teknik Kendaraan Ringan (TKR)</option
                        >
                        <option value="Mekanisme Pertanian (MP)"
                          >Mekanisme Pertanian (MP)</option
                        >
                        <option value="Teknik Sepeda Motor (TSM)"
                          >Teknik Sepeda Motor (TSM)</option
                        >
                        <option value="Teknik Komputer Jaringan (TKJ)"
                          >Teknik Komputer Jaringan (TKJ)</option
                        >
                        <option value="Rekayasa Perangkat Lunak (RPL)"
                          >Rekayasa Perangkat Lunak (RPL)</option
                        >
                      </select>
                      <em
                        class="text-red-600"
                        v-if="errors.hasOwnProperty('nama')"
                      >
                        <div v-for="(item, index) in errors.nama" :key="index">
                          {{ item }}
                        </div>
                      </em>
                    </div>
                  </div>
                  <div class="m-4">
                    <label for="nama" class="font-bold">
                      Akreditasi
                    </label>
                    <div class="w-1/3">
                      <select
                        id="cars"
                        v-model="form.akreditasi"
                        class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                        form="form"
                      >
                        <option value="">-Pilih Akreditasi-</option>
                        <option value="A"
                          >A</option
                        >
                        <option value="B"
                          >B</option
                        >
                        <option value="C"
                          >C</option
                        >
                        <option value="D"
                          >D</option
                        >
                        <option value="E"
                          >E</option
                        >
                        <option value="F"
                          >F</option
                        >
                      </select>
                    </div>
                    <em
                        class="text-red-600"
                        v-if="errors.hasOwnProperty('akreditasi')"
                      >
                        <div
                          v-for="(item, index) in errors.akreditasi"
                          :key="index"
                        >
                          {{ item }}
                        </div>
                      </em>
                  </div>
                  <div class="m-4">
                    <button
                      class="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600 font-bold focus:outline-none"
                    >
                      <i
                        class="fa fa-spinner animate-spin"
                        v-if="isLoading"
                      ></i>
                      <i class="fa fa-save" v-else></i> Simpan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </transition>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
// eslint-disable vue/no-unused-vars
// eslint-disable-line no-unused-vars
import axios from "axios";
import { mapState } from "vuex";

export default {
  data() {
    return {
      ruangan: [],
      detail: "",
      showModal: false,
      notif: false,
      editMode: false,
      isLoading: false,
      form: new Form({
        nama: "",
        akreditasi: ""
      }),
      errors: [],
      isTableLoading: true,
      page: 0,
      limit: 10,
      currentPage: 1,
      id: ""
    };
  },
  computed: {
    ...mapState(["Jurusan"])
  },
  mounted() {
    this.$store.dispatch("Jurusan/getDataJurusan", {
      page: this.page,
      limit: this.limit
    });
  },
  methods: {
    getRuangan() {
      this.isTableLoading = true;
      axios
        .get("/api/data-induk/jurusan")
        .then(response => {
          this.isTableLoading = false;
          this.ruangan = response.data.data;
        })
        .catch(error => {
          this.isTableLoading = false;
          console.log(error);
        });
    },
    getDetailJurusan(id) {
      axios
        .get("/api/data-induk/jurusan/" + id)
        .then(response => {
          this.detail = response.data.data;
          console.log(this.detail)
          this.id = this.detail.id;
          this.form.fill(this.detail);
        })
        .catch(error => {
          console.log(error);
        });
    },
    store() {
      this.errors = [];
      this.isLoading = true;
      this.form.akreditasi = this.form.akreditasi.toUpperCase()
      this.form
        .post("/api/data-induk/jurusan")
        .then(response => {
          this.isLoading = false;
          this.form.reset();
          this.$swal({
            icon: "success",
            title: "Data berhasil ditambah",
            type: "success",
            showConfirmButton: false,
            showCloseButton: true,
            timer: 5000
          });
          this.loadingData();
        })
        .catch(error => {
          this.isLoading = false;
          console.log(error);
          if (error.response.status === 400) {
            this.errors = error.response.data.errors;
          }
        });
    },
    update(id) {
      this.errors = [];
      this.isLoading = true;
      this.form.akreditasi = this.form.akreditasi.toUpperCase()
      this.form
        .put("/api/data-induk/jurusan/" + id)
        .then(response => {
          this.isLoading = false;
          this.$swal({
            icon: "success",
            title: "Data berhasil dirubah",
            type: "success",
            showConfirmButton: false,
            showCloseButton: true,
            timer: 5000
          });
          this.loadingData();
        })
        .catch(error => {
          this.isLoading = false;
          console.log(error);
          if (error.response.status === 400) {
            this.errors = error.response.data.errors;
          }
        });
    },
    modal() {
      this.errors = [];
      this.form.reset()
      this.form.clear()
      this.editMode = false;
      this.showModal = true;
    },
    edit(id) {
      this.errors = [];
      this.editMode = true;
      this.showModal = true;
      this.getDetailJurusan(id);
    },
    closeModal() {
      this.editMode = false;
      this.showModal = false;
      this.errors = [];
    },
    showNotif() {
      this.notif = true;
    },
    loadingData() {
      this.$store.dispatch("Jurusan/getDataJurusan", {
        page: this.page,
        limit: this.limit
      });
    },
    nextPage() {
      this.page = this.page + 1;
      this.currentPage = this.page + 1;
      this.$store.dispatch("Jurusan/getDataJurusan", {
        page: this.page,
        limit: this.limit
      });
      console.log(this.total_page / this.limit);
    },
    prevPage() {
      this.page = this.page - 1;
      this.currentPage = this.page + 1;
      this.$store.dispatch("Jurusan/getDataJurusan", {
        page: this.page,
        limit: this.limit
      });
    },
    remove(id) {
      this.$swal({
        text: "Apakah anda ingin menghapus data ini?",
        showConfirmButton: true,
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: "YA",
        cancelButtonText: "Tidak",
      }).then(result => {
        if (result.isConfirmed) {
          axios.delete("/api/data-induk/jurusan/" + id).then(response => {
            this.$swal({
              icon: 'success',
              title: "Berhasil menghapus data.",
              showConfirmButton: false,
              showCloseButton: true,
              timer: 5000
            });
            this.loadingData()
          }).catch(error => {
            console.log(error)
          });
        }
      });
    }
  }
};
</script>
