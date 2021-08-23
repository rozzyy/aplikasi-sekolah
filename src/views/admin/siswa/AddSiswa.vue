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
                  <label for="nama" class="font-bold">NIPD</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan NIPD"
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
                  <label for="nama" class="font-bold">Tempat Lahir</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Tempat Lahir"
                  />
                </div>
                <div class="mt-3">
                  <label for="nama" class="font-bold">Email</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Email"
                  />
                </div>
                <div class="mt-3">
                  <label for="jenis kelamin" class="font-bold"
                    >Rombel</label
                  >
                  <select
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    form="form"
                  >
                    <option>-Pilih Rombel-</option>
                    <option v-for="(item, index) in kelasOptions"
                    :key="index" :value="item">{{ item.nama }}</option>
                  </select>
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
                  >
                    <option>-Pilih Jenis Kelamin-</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div class="mt-3">
                  <label for="nama" class="font-bold">NISN</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan NISN"
                  />
                </div>
                <div class="mt-3">
                  <label for="jenis kelamin" class="font-bold"
                    >Agama</label
                  >
                  <select
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    form="form"
                  >
                    <option>-Pilih Agama-</option>
                    <option v-for="(item, index) in options"
                    :key="index" :value="item">{{ item }}</option>
                  </select>
                </div>
                <div class="mt-3">
                  <label for="nama" class="font-bold">Tanggal Lahir</label>
                  <div>
                    <div class="inline-flex w-full">
                      <input
                        type="text"
                        class="bg-gray-100 border border-r-0 w-full rounded-l-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
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
                      :model-config="modelConfig"
                      v-if="calShow"
                      class="absolute -ml-64 mt-12"
                      v-click-outside="hideCal"
                    />
                  </div>
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
                  <label for="nama" class="font-bold">Alamat</label>
                  <input
                    type="text"
                    class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
                    placeholder="Masukkan Alamat"
                  />
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
      statusOptions: ['Ayah', 'Ibu', 'Wali']
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
    }
  }
};
</script>
