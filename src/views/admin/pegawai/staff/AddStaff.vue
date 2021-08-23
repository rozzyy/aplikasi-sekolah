<template>
  <div>
    <div class="grid grid-cols-12 bg-white rounded-md p-5 gap-8">
      <div class="col-span-1">
        <i
          class="fa fa-arrow-left fa-2x cursor-pointer hover:text-gray-600 transition-all duration-300 ease-out transform hover:-translate-y-1"
          @click="backArrow"
        ></i>
      </div>
      <div class="col-span-3 text-center">
        <div class="flex place-content-center">
          <div class="bg-gray-300 text-center w-48 h-56 overflow-hidden">
            <img
              :src="fotoProfil"
              alt=""
              class="transition-all duration-300 ease-out transform hover:scale-125 cursor-pointer h-full"
            />
          </div>
        </div>
        <div class="my-2">
          <button
            class="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:font-bold focus:outline-none hover:shadow-lg"
          >
            Upload Foto
          </button>
          <p>
            Foto yang akan diupload tidak boleh lebih dari 500kb. (Optional)
          </p>
        </div>
      </div>
      <div class="col-span-8">
        <div class="text-lg font-bold">
          IDENTITAS STAFF
        </div>
        <p>Silahkan isi kolom di bawah ini dengan data yang valid.</p>
        <form @submit.prevent="$route.name === 'EditStaff' ? editStaff($route.params.id) : store()" id="form">
          <div class="my-3 grid grid-cols-2 gap-4">
            <div>
              <div class="my-3">
                <label for="nama" class="font-bold">Nama</label>
                <div>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Nama Guru"
                    v-model="form.nama"
                  />
                  <small
                    v-if="errors.hasOwnProperty('nama')"
                    class="text-red-600"
                  >
                    {{ errors.nama[0] }}
                  </small>
                </div>
              </div>
              <div class="my-3">
                <label for="nama" class="font-bold">NUPTK</label>
                <div>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan NUPTK"
                    v-model="form.nuptk"
                  />
                  <small
                    v-if="errors.hasOwnProperty('nuptk')"
                    class="text-red-600"
                  >
                    {{ errors.nuptk[0] }}
                  </small>
                </div>
              </div>
              <div class="my-3">
                <label for="nama" class="font-bold">Jabatan</label>
                <div>
                  <select name="cars" id="cars" v-model="form.jabatan" class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2" form="form">
                    <option value="staff">Staff</option>
                    <option value="guru">Guru</option>
                  </select>
                  <small
                    v-if="errors.hasOwnProperty('jabatan')"
                    class="text-red-600"
                  >
                    {{ errors.jabatan[0] }}
                  </small>
                </div>
              </div>
              <div class="my-3">
                <label for="nama" class="font-bold">Tempat Lahir</label>
                <div>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Tempat Lahir"
                    v-model="form.tmpt_lahir"
                  />
                  <small
                    v-if="errors.hasOwnProperty('tmpt_lahir')"
                    class="text-red-600"
                  >
                    {{ errors.tmpt_lahir[0] }}
                  </small>
                </div>
              </div>
              <div class="my-3">
                <label for="nama" class="font-bold">Jenis Kelamin</label>
                <div>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Jenis Kelamin"
                    v-model="form.jenis_kelamin"
                  />
                  <small
                    v-if="errors.hasOwnProperty('jenis_kelamin')"
                    class="text-red-600"
                  >
                    {{ errors.jenis_kelamin[0] }}
                  </small>
                </div>
              </div>
              <div class="my-3">
                <label for="nama" class="font-bold">Alamat</label>
                <div>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Alamat"
                    v-model="form.alamat"
                  />
                  <small
                    v-if="errors.hasOwnProperty('alamat')"
                    class="text-red-600"
                  >
                    {{ errors.alamat[0] }}
                  </small>
                </div>
              </div>
              <div class="my-3">
                <label for="nama" class="font-bold">Dusun</label>
                <div>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Dusun"
                    v-model="form.dusun"
                  />
                </div>
              </div>
              <div class="my-3">
                <label for="nama" class="font-bold">Kecamatan</label>
                <div>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Kecamatan"
                    v-model="form.kecamatan"
                  />
                  <small
                    v-if="errors.hasOwnProperty('kecamatan')"
                    class="text-red-600"
                  >
                    {{ errors.kecamatan[0] }}
                  </small>
                </div>
              </div>
              <div class="my-3">
                <label for="nama" class="font-bold">Nomor Handphone</label>
                <div>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Nomor Handphone"
                    v-model="form.hp"
                  />
                  <small
                    v-if="errors.hasOwnProperty('hp')"
                    class="text-red-600"
                  >
                    {{ errors.hp[0] }}
                  </small>
                </div>
              </div>
            </div>
            <div>
              <div class="my-3">
                <label for="nama" class="font-bold">NIP</label>
                <div>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan NIP"
                    v-model="form.nip"
                  />
                  <small
                    v-if="errors.hasOwnProperty('nip')"
                    class="text-red-600"
                  >
                    {{ errors.nip[0] }}
                  </small>
                </div>
              </div>
              <div class="my-3">
                <label for="nama" class="font-bold">Status Pegawai</label>
                <div>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Jenis PTK"
                    v-model="form.status_pegawai"
                  />
                  <small
                    v-if="errors.hasOwnProperty('status_pegawai')"
                    class="text-red-600"
                  >
                    {{ errors.status_pegawai[0] }}
                  </small>
                </div>
              </div>
              <div class="my-3">
                <label for="nama" class="font-bold">Tanggal Lahir</label>
                <div>
                  <div class="inline-flex w-full">
                    <input
                      type="text"
                      class="bg-gray-100 border border-r-0 w-full rounded-l-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                      v-model="form.tgl_lahir"
                      placeholder="Pilih Tanggal"
                    />
                    <div
                      class="bg-gray-100 border border-l-0 rounded-r-md p-2 hover:bg-gray-200"
                      @click="dateFocus"
                    >
                      <i class="fa fa-calendar-alt cursor-pointer"></i>
                    </div>
                  </div>
                  <small
                    v-if="errors.hasOwnProperty('tgl_lahir')"
                    class="text-red-600"
                  >
                    {{ errors.tgl_lahir[0] }}
                  </small>
                  <vc-date-picker
                    v-model="form.tgl_lahir"
                    :model-config="modelConfig"
                    v-if="calShow"
                    class="absolute -ml-64 mt-12"
                    v-click-outside="hideCal"
                  />
                </div>
              </div>
              <div class="my-3">
                <label for="nama" class="font-bold">Agama</label>
                <div>
                  <select
                    name="cars"
                    id="cars"
                    v-model="form.agama"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    form="form"
                  >
                    <option value="Islam">Islam</option>
                    <option value="Protestan">Protestan</option>
                    <option value="Katolik">Katolik</option>
                    <option value="Budha">Budha</option>
                    <option value="Hindu">Hindu</option>
                  </select>
                  <small
                    v-if="errors.hasOwnProperty('agama')"
                    class="text-red-600"
                  >
                    {{ errors.agama[0] }}
                  </small>
                </div>
              </div>
              <div class="my-3 grid grid-cols-2 gap-4">
                <div>
                  <label for="nama" class="font-bold">RT</label>
                  <div>
                    <input
                      type="text"
                      class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                      v-model="form.rt"
                    />
                  </div>
                </div>
                <div>
                  <label for="nama" class="font-bold">RW</label>
                  <div>
                    <input
                      type="text"
                      class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                      v-model="form.rw"
                    />
                  </div>
                </div>
              </div>
              <div class="my-3">
                <label for="nama" class="font-bold">Kelurahan</label>
                <div>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Kelurahan"
                    v-model="form.kelurahan"
                  />
                  <small
                    v-if="errors.hasOwnProperty('kelurahan')"
                    class="text-red-600"
                  >
                    {{ errors.kelurahan[0] }}
                  </small>
                </div>
              </div>
              <div class="my-3">
                <label for="nama" class="font-bold">Kodepos</label>
                <div>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Kodepos"
                    v-model="form.kodepos"
                  />
                  <small
                    v-if="errors.hasOwnProperty('kodepos')"
                    class="text-red-600"
                  >
                    {{ errors.kodepos[0] }}
                  </small>
                </div>
              </div>
              <div class="my-3">
                <label for="nama" class="font-bold">Email</label>
                <div>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Email"
                    v-model="form.email"
                  />
                  <small
                    v-if="errors.hasOwnProperty('email')"
                    class="text-red-600"
                  >
                    {{ errors.email[0] }}
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div class="my-3 float-right">
            <button
              class="bg-blue-500 p-2 rounded-md focus:outline-none hover:bg-blue-600 transition-all duration-300 ease-out transform hover:-translate-y-1 text-white hover:shadow-lg font-bold"
            >
              <i class="fa fa-spinner animate-spin" v-if="isLoading"></i>
              <i class="fa fa-save" v-else></i> Simpan
            </button>
          </div>
        </form>
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
import fotoProfil from "@/assets/user3.webp";

export default {
  data() {
    return {
      fotoProfil: fotoProfil,
      date: "",
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD"
      },
      calShow: false,
      form: new Form({
        nama: "",
        nuptk: "",
        nip: "",
        status_pegawai: "",
        tmpt_lahir: "",
        tgl_lahir: "",
        jenis_kelamin: "",
        agama: "",
        alamat: "",
        rt: "",
        rw: "",
        dusun: "",
        kelurahan: "",
        kecamatan: "",
        kodepos: "",
        hp: "",
        email: "",
        jabatan: ""
      }),
      errors: [],
      isLoading: false
    };
  },
  mounted () {
    if (this.$route.name === 'EditStaff') {
      this.detailStaff(this.$route.params.id)
    }
  },
  methods: {
    backArrow() {
      this.$router.push({ name: "ListStaff" });
    },
    dateFocus() {
      if (this.calShow === false) {
        this.calShow = true;
      } else {
        this.calShow = false;
      }
    },
    hideCal() {
      if (this.calShow === true) {
        this.calShow = false;
      } else {
        this.calShow = false;
      }
    },
    store() {
      this.errors = [];
      this.isLoading = true;
      this.form
        .post("/api/profil/pegawai")
        .then(response => {
          this.errors = [];
          this.isLoading = false;
          this.form.reset()
          this.$swal({
            icon: "success",
            title: "Data berhasil ditambah",
            text: "Silahkan periksa kembali data anda.",
            type: "success",
            confirmButtonClass: "btn btn-info",
            showConfirmButton: true,
            confirmButtonText: "OKE",
            showCloseButton: true,
            timer: 5000
          });
        })
        .catch(error => {
          this.isLoading = false;
          if (error.response.status === 400) {
            this.errors = error.response.data.errors;
          }
        });
    },
    editStaff (id) {
      this.errors = []
      this.isLoading = true
      this.form.put('/api/profil/pegawai/' + id).then(response => {
        this.errors = [];
          this.isLoading = false;
          this.$swal({
            icon: "success",
            title: "Data berhasil dirubah",
            text: "Silahkan periksa kembali data anda.",
            type: "success",
            confirmButtonClass: "btn btn-info",
            showConfirmButton: true,
            confirmButtonText: "OKE",
            showCloseButton: true,
            timer: 5000
          });
      }).catch(error => {
        this.isLoading = false
        if (error.response.status === 400) {
          this.errors = error.response.data.errors
        }
      })
    },
    detailStaff (id) {
      axios.get('/api/profil/pegawai/' + id).then(response => {
        console.log(response.data.data)
        this.form.fill(response.data.data)
      }).catch(error => {
        console.log(error)
      })
    }
  }
};
</script>
