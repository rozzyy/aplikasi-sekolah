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
              src="https://picsum.photos/id/1005/200/300"
              alt=""
              class="transition-all duration-300 ease-out transform hover:scale-125 cursor-pointer"
            />
          </div>
        </div>
        <div class="my-2">
          <button
            class="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:font-bold focus:outline-none hover:shadow-lg"
          >
            Upload Foto
          </button>
          <p>Foto yang akan diupload tidak boleh lebih dari 500kb.</p>
        </div>
      </div>
      <div class="col-span-8">
        <div class="text-lg font-bold">
          IDENTITAS GURU
        </div>
        <p>Silahkan isi kolom di bawah ini dengan data yang valid.</p>
        <form @submit.prevent="store">
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
                <label for="nama" class="font-bold">Tempat Lahir</label>
                <div>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Tempat Lahir"
                    v-model="form.tmpt_lahir"
                  />
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
                </div>
              </div>
              <div class="my-3">
                <label for="nama" class="font-bold">Jenis PTK</label>
                <div>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Jenis PTK"
                    v-model="form.jenis_ptk"
                  />
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
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Agama"
                    v-model="form.agama"
                  />
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
                </div>
              </div>
            </div>
          </div>
          <div class="my-3 float-right">
            <button
              class="bg-blue-500 p-2 rounded-md focus:outline-none hover:bg-blue-600 transition-all duration-300 ease-out transform hover:-translate-y-1 text-white hover:shadow-lg font-bold"
            >
              <i class="fa fa-save"></i> Simpan
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

export default {
  data() {
    return {
      date: "",
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD"
      },
      calShow: false,
      form: {
        nama: "",
        nuptk: "",
        nip: "",
        jenis_ptk: "",
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
        jabatan: "guru"
      },
      errors: []
    };
  },
  methods: {
    backArrow() {
      this.$router.push({ name: "ListGuru" });
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
      axios
        .post("/api/profil/pegawai", this.form)
        .then(response => {
          this.errors = [];
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
          console.log(error.response);
          if (error.response.status === 400) {
            this.errors = error.response.data.errors;
          }
        });
    }
  }
};
</script>
