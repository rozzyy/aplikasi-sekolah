<template>
  <div class="bg-white p-4 rounded-md shadow-md">
    <div class="font-bold text-2xl my-3">
      Daftar Rombel Sekolah
    </div>
    <div class="grid grid-cols-12 my-3">
      <div class="col-span-6">
        <div class="inline-flex">
          <select
            class="border p-2 focus:outline-none block"
            v-model="helper.tahun_ajaran_id"
          >
            <option
              v-for="(tahun, index) in TahunAjaran.tahunAjaranOptions"
              :key="index"
              :value="tahun.id"
            >
              {{ tahun.nama }}
            </option>
          </select>
          <select
            class="border p-2 focus:outline-none block"
            v-model="helper.kelas_id"
            @change="inputKelas($event)"
          >
            <option
              v-for="(kelas, index) in Kelas.kelasOptions"
              :key="index"
              :value="kelas.id"
            >
              {{ kelas.nama }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-span-6">
        <button
          class="bg-teal-400 rounded-md p-2 shadow-md font-bold focus:outline-none text-white float-right hover:bg-teal-600 transition-all duration-300 ease-out transform hover:-translate-y-2"
          @click="create"
        >
          <i class="fa fa-plus"></i> Tambah Siswa
        </button>
      </div>
    </div>
    <hr />
    <div class="py-5">
      <div class="grid grid-cols-12 gap-4 my-5">
        <div class="col-span-2 bg-green-400 text-center rounded-md text-white font-bold shadow-md">
          <span>Total Siswa: </span>
          <span>{{ Rombel.total_page }}</span>
        </div>
        <div class="col-span-2 bg-green-400 text-center rounded-md text-white font-bold shadow-md">
          <span>Laki-laki: </span>
          <span>32</span>
        </div>
        <div class="col-span-2 bg-green-400 text-center rounded-md text-white font-bold shadow-md">
          <span>Perempuan: </span>
          <span>32</span>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-4">
        <div
          class="col-span-3"
          v-for="(rombel, index) in Rombel.rombel"
          :key="index"
        >
          <div
            class="bg-gray-800 rounded-md py-4 transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-lg"
            v-for="(siswa, index) in rombel.Siswas"
            :key="index"
          >
            <div class="overflow-hidden rounded-full mx-auto mt-3 w-32 h-32">
              <img :src="user" alt="user" class="w-full" />
            </div>
            <div class="font-bold text-white text-center text-lg">
              {{ siswa.nama }}
            </div>
            <div class="text-green-300 font-bold text-center mb-3">
              Siswa Aktif
            </div>
            <div class="bg-blue-500 p-3 text-center font-bold text-white">
              {{ rombel.Kela.nama }}
            </div>
            <div class="mt-3 text-center">
              <button
                class="font-bold text-white px-8 border-2 hover:bg-white hover:text-gray-800 hover:border-none rounded-md"
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="bg-gray-100 absolute w-full h-full top-0 right-0 z-40 p-4 rounded-md"
    >
      <div class="grid grid-cols-12">
        <div class="col-span-6 text-2xl font-bold">
          Tambah Siswa untuk
          <span class="text-red-400">TA 2020/2021 Rombel X-RPL-1</span>
        </div>
        <div class="col-span-6">
          <button
            class="focus:outline-none float-right hover:text-gray-600"
            @click="close"
          >
            <i class="fa fa-times text-lg"></i>
          </button>
        </div>
      </div>
      <div class="my-5">
        <div class="inline-flex">
          <div class="p-2 border-l border-t border-b bg-white rounded-l-full">
            <i class="fa fa-search"></i>
          </div>
          <input
            type="text"
            placeholder="Cari siswa"
            class="rounded-r-full border-t border-r border-b border-gray-300 p-2 focus:outline-none w-64"
          />
        </div>
      </div>
      <div class="my-5">
        <table class="min-w-full border">
          <thead class="border-b">
            <tr class="bg-gray-700 text-white text-left">
              <th></th>
              <th v-for="(field, index) in fields" :key="index" class="py-2">
                {{ field.title }}
              </th>
              <th>
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              :class="{
                'bg-gray-300': index / 2 == 0,
                'hover:bg-gray-400': true
              }"
              v-for="(data, index) in dataTest"
              :key="index"
            >
              <td class="py-2">
                <div
                  class="overflow-hidden rounded-md w-12 h-12 m-auto cursor-pointer"
                >
                  <img
                    :src="user"
                    alt="user"
                    class="w-12 transition-all duration-300 ease-out transform hover:scale-125"
                  />
                </div>
              </td>
              <td v-for="(item, index) in fields" :key="index">
                {{ data[item.key] }}
              </td>
              <td>
                <div>
                  <button
                    class="bg-red-400 text-white font-bold focus:outline-none p-2 font-mono shadow-md hover:bg-red-500 rounded-md"
                    v-if="data.jenis_kelamin"
                    @click="batal(index)"
                  >
                    <i class="fa fa-times-circle text-sm"></i> Batal
                  </button>
                  <button
                    :class="{
                      'bg-green-400': true,
                      'text-white': true,
                      'font-bold': true,
                      'font-mono': true,
                      'p-2': true,
                      'rounded-md': true,
                      'focus:outline-none': true,
                      'hover:bg-green-500': true,
                      'shadow-md': true
                    }"
                    @click="pilih(index)"
                    v-else
                  >
                    <i class="fa fa-check-circle text-sm"></i> Pilih
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- image -->
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
// eslint-disable vue/no-unused-vars
// eslint-disable-line no-unused-vars
import user from "@/assets/user3.webp";
import foto from "@/assets/pasFoto.jpg";
import { mapState } from "vuex";

export default {
  data() {
    return {
      user: user,
      foto: foto,
      showModal: false,
      choose: true,
      num: "",
      dataTest: [
        {
          nama: "Aprilia Anjani",
          nipd: "12323454567890",
          nisn: "08123432344",
          jenis_kelamin: ""
        },
        {
          nama: "Aprilia Anjani",
          nipd: "12323454567890",
          nisn: "08123432344",
          jenis_kelamin: "Laki-laki"
        }
      ],
      fields: [
        {
          title: "Nama",
          key: "nama"
        },
        {
          title: "NIPD",
          key: "nipd"
        },
        {
          title: "NISN",
          key: "nisn"
        },
        {
          title: "Jenis Kelamin",
          key: "jenis_kelamin"
        }
      ],
      helper: {
        tahun_ajaran_id: 1,
        kelas_id: 1
      },
    };
  },
  computed: {
    ...mapState(["TahunAjaran", "Kelas", "Rombel"])
  },
  mounted() {
    this.$store.dispatch("TahunAjaran/getTahunAjaranOptions");
    this.$store.dispatch("Kelas/getKelasOptions");
    this.$store.dispatch("Rombel/getRombel", this.helper);
  },
  methods: {
    create() {
      this.showModal = true;
    },
    close() {
      this.showModal = false;
    },
    pilih(index) {
      this.dataTest[index].jenis_kelamin = "Laki-laki";
    },
    batal(index) {
      this.dataTest[index].jenis_kelamin = "";
    },
    inputKelas(event) {
      console.log(event.target.value)
    }
  }
};
</script>
