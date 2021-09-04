<template>
  <div class="bg-white rounded-md">
    <div class="border-b-2 p-4 font-bold text-xl">
      <span
        ><i
          class="fa fa-arrow-left mr-4 cursor-pointer hover:text-gray-400"
          @click="back"
        ></i
      ></span>
      Form Data Siswa
    </div>
    <div class="p-2">
      <div class="mt-2 grid grid-cols-12">
        <div
          v-for="(data, index) in tabs"
          :key="index"
          :class="{
            'bg-gray-100': activeTab == index,
            'px-4': true,
            'py-2': true,
            'rounded-t-md': true,
            'shadow-inner': activeTab == index,
            'font-bold': true,
            'col-span-3': true,
            'cursor-pointer': true,
            'text-gray-600': activeTab != index,
            'hover:bg-gray-100': true,
            'hover:text-gray-800': true
          }"
          @click="activeTab = index"
        >
          {{ data.name }}
        </div>
      </div>
      <div class="bg-gray-100 rounded-b-md p-4">
        <div v-show="activeTab == 0">
          <div class="bg-white rounded-md p-8 shadow-md">
            <div class="my-5">
              <div class="font-bold text-2xl">
                IDENTITAS SISWA
              </div>
              Silahkan isi form di bawah ini dengan data yang valid.
            </div>
            <form class="grid grid-cols-2 gap-8" @submit.prevent="storeSiswa">
              <div>
                <div class="mt-3">
                  <label for="nama" class="font-bold">Nama</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Nama"
                    v-model="formSiswa.nama"
                  />
                  <small
                    v-if="errors.hasOwnProperty('nama')"
                    class="text-red-600"
                  >
                  {{ errors.nama[0] }}
                  </small>
                </div>
                <div class="mt-3">
                  <label for="nama" class="font-bold">NIPD</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan NIPD"
                    v-model="formSiswa.nipd"
                  />
                  <small
                    v-if="errors.hasOwnProperty('nipd')"
                    class="text-red-600"
                  >
                  {{ errors.nipd[0] }}
                  </small>
                </div>
                <div class="mt-3">
                  <label for="nama" class="font-bold">NIK</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan NIK"
                    v-model="formSiswa.nik"
                  />
                  <small
                    v-if="errors.hasOwnProperty('nik')"
                    class="text-red-600"
                  >
                  {{ errors.nik[0] }}
                  </small>
                </div>
                <div class="mt-3">
                  <label for="nama" class="font-bold">Tempat Lahir</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Tempat Lahir"
                    v-model="formSiswa.tmpt_lahir"
                  />
                  <small
                    v-if="errors.hasOwnProperty('tmpt_lahir')"
                    class="text-red-600"
                  >
                  {{ errors.tmpt_lahir[0] }}
                  </small>
                </div>
                <div class="mt-3">
                  <label for="nama" class="font-bold">Email</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Email"
                    v-model="formSiswa.email"
                  />
                  <small
                    v-if="errors.hasOwnProperty('email')"
                    class="text-red-600"
                  >
                  {{ errors.email[0] }}
                  </small>
                </div>
                <div class="mt-3">
                  <label for="jenis kelamin" class="font-bold"
                    >Rombel</label
                  >
                  <select
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    form="form"
                    v-model="formSiswa.rombel"
                  >
                    <option>-Pilih Rombel-</option>
                    <option v-for="(item, index) in kelasOptions"
                    :key="index" :value="item">{{ item.nama }}</option>
                  </select>
                  <small
                    v-if="errors.hasOwnProperty('rombel')"
                    class="text-red-600"
                  >
                  {{ errors.rombel[0] }}
                  </small>
                </div>
              </div>
              <div>
                <div class="mt-3">
                  <label for="jenis kelamin" class="font-bold"
                    >Jenis Kelamin</label
                  >
                  <select
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    form="form"
                    v-model="formSiswa.jenis_kelamin"
                  >
                    <option>-Pilih Jenis Kelamin-</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                  <small
                    v-if="errors.hasOwnProperty('jenis_kelamin')"
                    class="text-red-600"
                  >
                  {{ errors.jenis_kelamin[0] }}
                  </small>
                </div>
                <div class="mt-3">
                  <label for="nama" class="font-bold">NISN</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan NISN"
                    v-model="formSiswa.nisn"
                  />
                  <small
                    v-if="errors.hasOwnProperty('nisn')"
                    class="text-red-600"
                  >{{ errors.nisn[0] }}
                  </small>
                </div>
                <div class="mt-3">
                  <label for="jenis kelamin" class="font-bold"
                    >Agama</label
                  >
                  <select
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    form="form"
                    v-model="formSiswa.agama"
                  >
                    <option>-Pilih Agama-</option>
                    <option v-for="(item, index) in options"
                    :key="index" :value="item">{{ item }}</option>
                  </select>
                  <small
                    v-if="errors.hasOwnProperty('agama')"
                    class="text-red-600"
                  >
                  {{ errors.agama[0] }}
                  </small>
                </div>
                <div class="mt-3">
                  <label for="nama" class="font-bold">Tanggal Lahir</label>
                  <div>
                    <div class="inline-flex w-full">
                      <input
                        type="text"
                        class="bg-gray-100 border border-r-0 w-full rounded-l-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                        placeholder="Pilih Tanggal"
                        v-model="formSiswa.tgl_lahir"
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
                      :model-config="modelConfig"
                      v-if="calShow"
                      class="absolute -ml-64 mt-12"
                      v-click-outside="hideCal"
                      v-model="formSiswa.tgl_lahir"
                    />
                  </div>
                </div>
                <div class="mt-3">
                  <label for="nama" class="font-bold">Nomor Handphone</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Nomor Handphone"
                    v-model="formSiswa.hp"
                  />
                  <small
                    v-if="errors.hasOwnProperty('hp')"
                    class="text-red-600"
                  >
                  {{ errors.hp[0] }}
                  </small>
                </div>
                <div class="mt-3">
                  <label for="nama" class="font-bold">Alamat</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Alamat"
                    v-model="formSiswa.alamat"
                  />
                  <small
                    v-if="errors.hasOwnProperty('alamat')"
                    class="text-red-600"
                  >
                  {{ errors.alamat[0] }}
                  </small>
                </div>
              </div>
              <div class="float-right">
                  <button class="bg-blue-600 font-bold text-white p-2 rounded-md transition-all duration-300 ease-out transform hover:-translate-y-1 hover:bg-blue-700 hover:shadow-md">
                      <i class="fa fa-save"></i> Simpan
                  </button>
              </div>
            </form>
          </div>
        </div>
        <div v-show="activeTab == 1">
          <div class="bg-white rounded-md p-8 shadow-md">
            <div class="my-5">
              <div class="font-bold text-2xl">
                IDENTITAS ORANG TUA
              </div>
              Silahkan isi form di bawah ini dengan data yang valid.
            </div>
            <form class="grid grid-cols-2 gap-8">
              <div>
                <div class="mt-3">
                  <label for="nama" class="font-bold">Nama</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Nama"
                  />
                </div>
                <div class="mt-3">
                  <label for="nama" class="font-bold">Pekerjaan</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Pekerjaan"
                  />
                </div>
                <div class="mt-3">
                  <label for="nama" class="font-bold">NIK</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan NIK"
                  />
                </div>
                <div class="mt-3">
                  <label for="nama" class="font-bold">Alamat</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Alamat"
                  />
                </div>
              </div>
              <div>
                <div class="mt-3">
                  <label for="nama" class="font-bold">Pendidikan</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Pendidikan"
                  />
                </div>
                <div class="mt-3">
                  <label for="nama" class="font-bold">Tahun Lahir</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Tahun Lahir"
                  />
                </div>
                <div class="mt-3">
                  <label for="nama" class="font-bold">Nomor Handphone</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Nomor Handphone"
                  />
                </div>
                <div class="mt-3">
                  <label for="jenis kelamin" class="font-bold"
                    >Status Orang Tua</label
                  >
                  <select
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    form="form"
                  >
                    <option>-Pilih Status Orang Tua-</option>
                    <option v-for="(item, index) in statusOptions"
                    :key="index" :value="item">{{ item }}</option>
                  </select>
                </div>
              </div>
              <div class="float-right">
                  <button class="bg-blue-600 font-bold text-white p-2 rounded-md transition-all duration-300 ease-out transform hover:-translate-y-1 hover:bg-blue-700 hover:shadow-md">
                      <i class="fa fa-save"></i> Simpan
                  </button>
              </div>
            </form>
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
import axios from 'axios'

export default {
  data() {
    return {
      activeTab: 0,
      calShow: false,
      tabs: [
        {
          name: "Data Siswa"
        },
        {
          name: "Data Orang Tua"
        }
      ],
      options: ['Islam', 'Protestan', 'Katolik', 'Budha', 'Hindu'],
      kelasOptions: [],
      statusOptions: ['Ayah', 'Ibu', 'Wali'],
      formSiswa: new Form({
          nama: "",
          jenis_kelamin: '',
          nipd: '',
          nisn: '',
          nik: '',
          agama: '',
          tmpt_lahir: '',
          tgl_lahir: '',
          email: '',
          hp: '',
          rombel: '',
          alamat: ''
      }),
      formOrtu: new Form({
          nama: '',
          pendidikan: '',
          pekerjaan: '',
          tahun_lahir: '',
          nik: '',
          hp: '',
          status: '',
          alamat: '',
          siswaId: ''
      }),
      siswaId: '',
      errors: []
    };
  },
  mounted () {
      this.getKelas()
  },
  methods: {
    back() {
      this.$router.push({ name: "ListSiswa" });
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
    getKelas () {
        axios.get("/api/data-induk/kelas/options").then(response => {
            this.kelasOptions = response.data.data
            console.log(response.data.data)
        }).catch(error => {
            console.log(error)
        })
    },
    storeSiswa () {
        this.formSiswa.post('/api/profil/siswa').then(response => {
            const items = response.data.data
            this.siswaId = items.id
        }).catch(error => {
            if (error.response.status === 400) {
                this.errors = error.response.data.errors
            }
        })
    }
  }
};
</script>
