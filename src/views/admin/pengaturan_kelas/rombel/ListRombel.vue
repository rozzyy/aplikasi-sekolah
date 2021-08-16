<template>
  <div>
    <transition
      enter-active-class="transition duration-500 ease-liner"
      enter-class="transform translate-y-32"
    >
      <div v-if="notif">
        <div
          class="absolute bg-green-400 right-0 top-0 z-50 shadow-md inline-flex m-3"
        >
          <div class="bg-green-500">
            <div class="my-5 px-4">
              <i class="fa fa-check-circle fa-2x text-white"></i>
            </div>
          </div>
          <div class="font-bold text-white pl-2 pb-5 pt-3 pr-24">
            <div>
              SUCCESS
            </div>
            <div>
              Data Anda Berhasil Ditambahkan.
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="bg-white p-5 rounded-lg shadow-md">
      <div class="my-4 grid grid-cols-12">
        <div class="text-xl font-bold col-span-6">
          Daftar Ruangan Sekolah
        </div>
        <div class="col-span-6">
          <div class="float-right">
            <button
              class=" bg-green-500 hover:shadow-md hover:bg-green-600 rounded-lg p-2 text-white font-bold focus:outline-none"
              @click="modal"
            >
              <i class="fa fa-plus"></i> Tambah Ruangan Kelas
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
                <th class="text-left px-6 uppercase">Nama Ruangan</th>
                <th class="text-left px-6 uppercase">Kategori Ruangan</th>
                <th class="text-left px-6 uppercase">Aksi</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y" v-if="ruangan">
              <tr v-for="(item, index) in ruangan" :key="index">
                <td class="px-6 py-2 whitespace-no-wrap text-center">
                  {{ index + 1 }}
                </td>
                <td class="px-6 py-2 whitespace-no-wrap">{{ item.nama }}</td>
                <td class="px-6 py-2 whitespace-no-wrap">
                  {{ item.tipe_ruangan }}
                </td>
                <td class="px-6 py-2 whitespace-no-wrap">
                  <button
                    class="mr-2 bg-blue-600 hover:bg-blue-700 py-1 px-2 rounded-md text-white"
                    @click="edit(index)"
                  >
                    <i class="fa fa-edit"></i>
                  </button>
                  <button
                    class="bg-red-600 hover:bg-red-700 py-1 px-2 rounded-md text-white"
                  >
                    <i class="fa fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <tr v-else class="text-center">
              <td colspan="4">Data Belum Tersedia.</td>
            </tr>
          </table>

          <div class="text-center my-3">
            <span class="mx-3">
              <button
                class="bg-blue-500 hover:bg-blue-600 rounded-md text-white py-1 px-3"
              >
                Prev
              </button>
            </span>
            <span>
              <button
                class="bg-blue-500 hover:bg-blue-600 rounded-md text-white py-1 px-3"
              >
                Next
              </button>
            </span>
          </div>
        </div>
      </div>
      <transition
        enter-active-class="transition duration-100 ease-out"
        leave-active-class="transition duration-100 ease-out"
      >
        <div v-if="showModal">
          <div
            class="fixed top-0 right-0 bg-black opacity-50 overflow-auto z-10 w-full h-full cursor-pointer"
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
              class="z-40 w-2/5 absolute -mt-56 flex place-content-center ml-20"
            >
              <div class="bg-white rounded-lg w-full">
                <div class="grid grid-cols-12">
                  <div class="col-span-6">
                    <div class="text-xl m-3 font-bold">
                      {{ editMode ? "Edit Ruangan" : "Tambah Ruangan Baru" }}
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
                <form @submit.prevent="editMode ? update() : store()">
                  <div class="m-4">
                    <label for="nama" class="font-bold">
                      Nama Ruangan
                    </label>
                    <div>
                      <input
                        type="text"
                        class="bg-gray-200 w-full border-none rounded-md focus:outline-none p-2"
                        v-model="form.nama"
                      />
                      <em
                        class="text-red-600"
                        v-if="errors.hasOwnProperty('nama')"
                      >
                        <div
                          v-for="(item, index) in errors.nama"
                          :key="index"
                        >
                          {{ item }}
                        </div>
                      </em>
                    </div>
                  </div>
                  <div class="m-4">
                    <label for="nama" class="font-bold">
                      Kategori Ruangan
                    </label>
                    <div>
                      <input
                        type="text"
                        class="bg-gray-200 w-full border-none rounded-md focus:outline-none p-2"
                        v-model="form.tipe_ruangan"
                      />
                      <em
                        class="text-red-600"
                        v-if="errors.hasOwnProperty('tipe_ruangan')"
                      >
                        <div
                          v-for="(item, index) in errors.tipe_ruangan"
                          :key="index"
                        >
                          {{ item }}
                        </div>
                      </em>
                    </div>
                  </div>
                  <div class="m-4">
                    <button
                      class="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600 font-bold focus:outline-none"
                    >
                      <i class="fa fa-spinner animate-spin" v-if="isLoading"></i>
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

export default {
  data() {
    return {
      ruangan: [],
      detail: "",
      showModal: false,
      notif: false,
      editMode: false,
      isLoading: false,
      form: {
        nama: "",
        tipe_ruangan: ""
      },
      errors: [],
      isTableLoading: true
    };
  },
  mounted() {
    this.getRuangan();
  },
  methods: {
    getRuangan() {
      this.isTableLoading = true
      axios
        .get("/api/data-induk/ruangan")
        .then(response => {
          this.isTableLoading = false
          this.ruangan = response.data.data;
        })
        .catch(error => {
          this.isTableLoading = false
          console.log(error);
        });
    },
    getDetailRuangan(id) {
      axios
        .get("/api/data-induk/ruangan/" + id)
        .then(response => {
          this.detail = response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    store() {
      this.errors = []
      this.isLoading = true
      axios
        .post("/api/data-induk/ruangan")
        .then(response => {
          this.notif = true;
          this.isLoading = false
        })
        .catch(error => {
          this.isLoading = false
          console.log(error);
          if (error.response.status === 400) {
            this.errors = error.response.data.errors;
          }
        });
    },
    modal() {
      this.errors = []
      this.editMode = false;
      this.showModal = true;
    },
    edit(id) {
      this.errors = []
      this.editMode = true;
      this.showModal = true;
    },
    closeModal() {
      this.editMode = false;
      this.showModal = false;
      this.errors = []
    },
    showNotif() {
      this.notif = true;
    }
  }
};
</script>
