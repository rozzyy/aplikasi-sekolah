<template>
  <div>
    <div class="bg-white px-4 py-4 rounded-lg shadow-md">
      <div class="my-4 grid grid-cols-12">
        <div class="text-xl font-bold col-span-6">
          Daftar Semester
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
              <i class="fa fa-plus"></i> Tambah Semester
            </button>
          </div>
        </div>
      </div>
      <div class="rounded-lg">
        <div>
          <table class="min-w-full divide-y border">
            <thead class="bg-gray-300">
              <tr>
                <th class="text-left px-2 uppercase">No.</th>
                <th class="text-left px-2 uppercase">NAMA SEMESTER</th>
                <th class="text-left px-2 uppercase">TAHUN AJARAN</th>
                <th class="text-left px-2 uppercase">TANGGAL MULAI</th>
                <th class="text-left px-2 uppercase">TANGGAL AKHIR</th>
                <th class="text-left px-2 uppercase">STATUS</th>
                <th class="text-left px-2 uppercase">Aksi</th>
              </tr>
            </thead>
            <tr v-if="Semester.isLoading" class="text-center">
              <td colspan="6" class="text-teal-500 font-bold">
                <i class="fa fa-spinner animate-spin"></i>
                Loading...
              </td>
            </tr>
            <tbody
              class="bg-white divide-y"
              v-else-if="Semester.total_page !== 0"
            >
              <tr
                v-for="(item, index) in Semester.semester"
                :key="index"
                class="cursor-pointer hover:bg-gray-200"
              >
                <td
                  class="px-2 py-2 whitespace-no-wrap text-center"
                  style="width: 50px;"
                >
                  {{ index + 1 }}
                </td>
                <td class="px-2 py-2 whitespace-no-wrap">{{ item.nama }}</td>
                <td class="px-2 py-2 whitespace-no-wrap">{{ item.TahunAjaran.nama }}</td>
                <td class="px-2 py-2 whitespace-no-wrap">{{ moment(item.tgl_mulai).format('YYYY-MM-DD') }}</td>
                <td class="px-2 py-2 whitespace-no-wrap">{{ moment(item.tgl_akhir).format('YYYY-MM-DD') }}</td>
                <td class="px-2 py-2 whitespace-no-wrap">
                  <div v-if="item.status == 0">
                    <div class="text-white text-center rounded-md bg-teal-600 font-bold">
                      Berjalan
                    </div>
                  </div>
                  <div v-else>
                    <div class="text-red-400 text-center rounded-md bg-red-600 font-bold">
                      Selesai
                    </div>
                  </div>
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
              <td colspan="6" class="text-center font-bold text-red-400">
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
                      {{ editMode ? "Edit Semester" : "Tambah Semester" }}
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
                      Nama Semester
                    </label>
                    <div>
                      <input
                        type="text"
                        class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                        placeholder="Masukkan Nama Semester"
                        v-model="form.nama"
                      />
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
                    <label for="tahun_ajaran" class="font-bold">
                      Tahun Ajaran
                    </label>
                    <div>
                      <select
                        name="cars"
                        v-model="form.tahun_ajaran_id"
                        class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                        form="form"
                      >
                        <option value="">-Pilih Tahun Ajaran-</option>
                        <option
                          :value="item.id"
                          v-for="(item,
                          index) in TahunAjaran.tahunAjaranOptions"
                          :key="index"
                        >
                          {{ item.nama }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-2 m-4">
                    <div>
                      <label for="nama" class="font-bold">Tanggal Mulai</label>
                      <div>
                        <div class="inline-flex w-full">
                          <input
                            type="text"
                            class="bg-gray-100 border border-r-0 w-full rounded-l-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                            v-model="form.tgl_mulai"
                            placeholder="Pilih Tanggal"
                          />
                          <div
                            class="bg-gray-100 border border-l-0 rounded-r-md p-2 hover:bg-gray-200"
                            @click="dateFocus('mulai')"
                          >
                            <i class="fa fa-calendar-alt cursor-pointer"></i>
                          </div>
                        </div>
                        <small
                          v-if="errors.hasOwnProperty('tgl_lahir')"
                          class="text-red-600"
                        >
                          {{ errors.tgl_mulai[0] }}
                        </small>
                        <vc-date-picker
                          v-model="form.tgl_mulai"
                          :model-config="modelConfig"
                          v-if="calShow1"
                          class="absolute -ml-64 mt-12"
                          v-click-outside="hideCal"
                        />
                      </div>
                    </div>
                    <div>
                      <label for="nama" class="font-bold">Tanggal Berakhir</label>
                      <div>
                        <div class="inline-flex w-full">
                          <input
                            type="text"
                            class="bg-gray-100 border border-r-0 w-full rounded-l-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                            v-model="form.tgl_akhir"
                            placeholder="Pilih Tanggal"
                          />
                          <div
                            class="bg-gray-100 border border-l-0 rounded-r-md p-2 hover:bg-gray-200"
                            @click="dateFocus('akhir')"
                          >
                            <i class="fa fa-calendar-alt cursor-pointer"></i>
                          </div>
                        </div>
                        <small
                          v-if="errors.hasOwnProperty('tgl_lahir')"
                          class="text-red-600"
                        >
                          {{ errors.tgl_akhir[0] }}
                        </small>
                        <vc-date-picker
                          v-model="form.tgl_akhir"
                          :model-config="modelConfig"
                          v-if="calShow2"
                          class="absolute -ml-64 mt-12"
                          v-click-outside="hideCal"
                        />
                      </div>
                    </div>
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
import moment from 'moment'

export default {
  data() {
    return {
      semester: [],
      detail: "",
      showModal: false,
      notif: false,
      editMode: false,
      isLoading: false,
      form: new Form({
        nama: "",
        tgl_mulai: "",
        tgl_akhir: "",
        status: "",
        tahun_ajaran_id: ""
      }),
      errors: [],
      isTableLoading: true,
      page: 0,
      limit: 10,
      currentPage: 1,
      id: "",
      calShow1: false,
      calShow2: false,
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD"
      }
    };
  },
  computed: {
    ...mapState(["Semester", "TahunAjaran"])
  },
  mounted() {
    this.$store.dispatch("Semester/getSemester", {
      page: this.page,
      limit: this.limit
    });
    this.$store.dispatch("TahunAjaran/getTahunAjaranOptions");
  },
  methods: {
    dateFocus(value) {
      if (value == "mulai") {
        if (this.calShow1 == false) {
          this.calShow1 = true;
        }
      } else if (value == "akhir") {
        if (this.calShow2 == false) {
          this.calShow2 = true;
        }
      }
    },
    hideCal() {
      if (this.calShow1 == true) {
        this.calShow1 = false;
      } else if (this.calShow2 == true) {
        this.calShow2 = false;
      }
    },
    getDetailSemester(id) {
      axios
        .get("/api/data-induk/semester/" + id)
        .then(response => {
          this.detail = response.data.data;
          this.id = this.detail.id;
          this.form.fill(this.detail);
          this.form.tgl_mulai = moment(this.form.tgl_mulai).format('YYYY-MM-DD')
          this.form.tgl_akhir = moment(this.form.tgl_akhir).format('YYYY-MM-DD')
        })
        .catch(error => {
          console.log(error);
        });
    },
    store() {
      this.errors = [];
      this.isLoading = true;
      this.form
        .post("/api/data-induk/semester")
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
      this.form
        .put("/api/data-induk/semester/" + id)
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
      this.form.reset();
      this.form.clear();
      this.editMode = false;
      this.showModal = true;
    },
    edit(id) {
      this.errors = [];
      this.form.reset();
      this.form.clear();
      this.editMode = true;
      this.showModal = true;
      this.getDetailSemester(id);
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
      this.$store.dispatch("Semester/getSemester", {
        page: this.page,
        limit: this.limit
      });
    },
    nextPage() {
      this.page = this.page + 1;
      this.currentPage = this.page + 1;
      this.$store.dispatch("Semester/getSemester", {
        page: this.page,
        limit: this.limit
      });
    },
    prevPage() {
      this.page = this.page - 1;
      this.currentPage = this.page + 1;
      this.$store.dispatch("Semester/getSemester", {
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
        cancelButtonText: "Tidak"
      }).then(result => {
        if (result.isConfirmed) {
          axios
            .delete("/api/data-induk/semester/" + id)
            .then(response => {
              this.$swal({
                icon: "success",
                title: "Berhasil menghapus data.",
                showConfirmButton: false,
                showCloseButton: true,
                timer: 5000
              });
              this.loadingData();
            })
            .catch(error => {
              console.log(error);
            });
        }
      });
    }
  }
};
</script>
