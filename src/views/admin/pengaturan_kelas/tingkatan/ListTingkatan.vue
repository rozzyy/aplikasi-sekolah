<template>
  <div>
    <transition
      enter-active-class="transition duration-500 ease-liner"
      enter-class="transform translate-y-32"
    >
    </transition>
    <div class="bg-white p-5 rounded-lg shadow-md">
      <div class="my-4 grid grid-cols-12">
        <div class="text-xl font-bold col-span-6">
          Daftar Tingkatan
        </div>
      </div>
      <div class="rounded-lg">
        <div class="w-10/12 m-auto">
          <table class="min-w-full divide-y border">
            <thead class="bg-gray-300">
              <tr>
                <th class="text-left px-6 uppercase">No.</th>
                <th class="px-6 uppercase text-center">Tingkatan</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y" v-if="ruangan">
              <tr v-for="(item, index) in ruangan" :key="index">
                <td class="px-6 py-2 whitespace-no-wrap text-center" style="width: 50px;">
                  {{ index + 1 }}
                </td>
                <td class="px-6 py-2 whitespace-no-wrap text-center">{{ item.nama }}</td>
              </tr>
            </tbody>
            <tr v-else class="text-center">
              <td colspan="4">Data Belum Tersedia.</td>
            </tr>
          </table>
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
    this.getTingkatan();
  },
  methods: {
    getTingkatan() {
      this.isTableLoading = true
      axios
        .get("/api/data-induk/tingkatan")
        .then(response => {
          this.ruangan = response.data.data;
        })
        .catch(error => {
          this.isTableLoading = false
          console.log(error);
        });
    },
  }
};
</script>
