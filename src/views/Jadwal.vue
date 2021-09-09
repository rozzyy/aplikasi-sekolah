<template>
  <div class="mx-4 mt-20 rounded-md p-4 shadow-md bg-white">
    <h1 class="text-2xl font-bold">
      Daftar Absensi Siswa Kelas X-RPL-1
    </h1>
    <div class="my-5">
      <table class="min-w-full border">
        <thead class="border-b bg-gray-800 text-white">
          <tr>
            <th></th>
            <th class="text-left w-16 py-2">No.</th>
            <th class="text-left">Nama Siswa</th>
            <th class="text-left">Jenis Kelamin</th>
            <th class="text-left">NISN</th>
            <th class="text-left">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-gray-200 cursor-pointer hover:bg-gray-300">
            <td class="py-2">
              <div
                class="overflow-hidden rounded-md w-12 h-12 m-auto"
                @click="show"
              >
                <div
                  class="rounded-full w-3 h-3 -mt-1 -ml-1 bg-green-400 absolute z-10"
                ></div>
                <img
                  :src="foto"
                  alt="foto"
                  class="w-12 transition-all duration-300 ease-out transform hover:scale-110"
                />
              </div>
            </td>
            <td>
              1
            </td>
            <td>
              <div class="font-bold">
                Aprilia Anjani
              </div>
            </td>
            <td>
              Perempuan
            </td>
            <td>
              1234568
            </td>
            <td class="pr-2 w-32">
              <button
                class="bg-green-500 p-2 rounded-md text-white focus:outline-none hover:bg-green-600 font-bold"
                @click="showKet"
              >
                <i class="fa fa-clipboard"></i> Absensi
              </button>
            </td>
          </tr>
          <tr class="bg-gray-100 cursor-pointer hover:bg-gray-300">
            <td class="py-2">
              <div class="overflow-hidden rounded-md w-12 h-12 m-auto">
                <div
                  class="rounded-full w-3 h-3 -mt-1 -ml-1 bg-red-400 absolute"
                ></div>
                <img :src="foto" alt="foto" class="w-12" />
              </div>
            </td>
            <td>
              1
            </td>
            <td>
              <div class="font-bold">
                Aprilia Anjani
              </div>
            </td>
            <td>
              Perempuan
            </td>
            <td>
              123456789
            </td>
            <td class="pr-2">
              <button
                class="bg-green-500 p-2 rounded-md text-white focus:outline-none hover:bg-green-600 font-bold"
                @click="showKet"
              >
                <i class="fa fa-clipboard"></i> Absensi
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      v-if="showModalKet"
      class="bg-black bg-opacity-75 fixed h-screen w-full top-0 right-0 z-50"
    >
      <div class="mt-32 w-6/12 m-auto">
        <div class="float-right">
          <div
            class="bg-white w-12 h-12 rounded-full text-center -ml-8 -mt-3 absolute hover:bg-gray-200 cursor-pointer transition-all duration-300 ease-out transform hover:-translate-y-2"
            @click="close('absen')"
          >
            <i class="fa fa-times font-bold mt-3 text-2xl"></i>
          </div>
        </div>
        <div class="bg-white p-4 rounded-md">
            <div class="mb-5 font-bold text-2xl">
                Form Absensi Siswa
            </div>
          <div class="mb-3">
            <label for="kehadiran" class="font-bold">Kehadiran:</label>
            <div>
              <select
                class="border bg-gray-100 w-64 p-2 rounded-md focus:outline-none"
              >
                <option value="">-Pilih-</option>
                <option value="">Hadir</option>
                <option value="">Absen</option>
                <option value="">Izin</option>
                <option value="">Sakit</option>
              </select>
            </div>
          </div>
          <div class="mb-3">
              <label for="jamhadir" class="font-bold">Jam Hadir:</label>
              <div>
                  <vc-date-picker mode="time" v-model="date" :timezone="timezone"></vc-date-picker>
              </div>
          </div>
          <div class="mb-3">
            <label for="keterangan" class="font-bold">Keterangan:</label>
            <div>
              <textarea
                name="test"
                class="bg-gray-100 p-2 border w-full rounded-md focus:outline-none"
                rows="6"
                placeholder="Isi keterangan..."
              >
              </textarea>
            </div>
          </div>
          <div>
              <button class="bg-blue-400 p-2 text-white rounded-md font-bold transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-md hover:bg-blue-500">
                  <i class="fa fa-save"></i> Simpan
              </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showModal"
      class="bg-black bg-opacity-75 fixed h-screen w-full top-0 right-0 z-50"
    >
      <div class="mt-32 w-4/12 m-auto">
        <div class="float-right">
          <div
            class="bg-white w-12 h-12 rounded-full text-center -ml-8 -mt-3 absolute hover:bg-gray-200 cursor-pointer transition-all duration-300 ease-out transform hover:-translate-y-2"
            @click="close('foto')"
          >
            <i class="fa fa-times font-bold mt-3 text-2xl"></i>
          </div>
        </div>
        <img :src="foto" alt="foto" class="rounded-md" />
        <div class="bg-white rounded-b-md p-4 text-center">
          <div class="font-bold text-2xl">
            <i class="fa fa-clock"></i> Absensi pada jam:
          </div>
          <div class="font-bold text-2xl text-green-400">
            09:00
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
import foto from "../assets/user3.webp";
export default {
  data() {
    return {
      foto: foto,
      showModal: false,
      showModalKet: false,
      date: new Date(),
      timezone: ''
    };
  },
  methods: {
    show() {
      if (this.showModal == false) {
        document.getElementsByTagName("BODY")[0].style.overflow = 'hidden'
        this.showModal = true;
      } else {
        this.showModal = false;
      }
    },
    showKet() {
      if (this.showModalKet == false) {
        document.getElementsByTagName("BODY")[0].style.overflow = 'hidden'
        this.showModalKet = true;
      } else {
        this.showModalKet = false;
      }
    },
    close(value) {
        document.getElementsByTagName("BODY")[0].style.overflow = ''
        if (value == 'foto') {
            this.showModal = false
        } else if (value == 'absen') {
            this.showModalKet = false
        }
    }
  }
};
</script>
