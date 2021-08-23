<template>
  <div>
    <div class="bg-indigo-800 rounded-t-md py-2 px-3">
      <div
        class="text-white transition-all duration-300 ease-out transform hover:translate-x-1 cursor-pointer"
        @click="back"
      >
        <i class="fa fa-arrow-left text-2xl"></i>
      </div>
      <div class="grid grid-cols-12 p-8 gap-12">
        <div class="col-span-3">
          <div>
            <img :src="profil" alt="profil" class="rounded-full" />
          </div>
        </div>
        <div class="col-span-9 text-white my-5">
          <div class="font-bold text-3xl">{{ detail.nama }}</div>
          <div class="font-bold flex">
            <div class="text-2xl">{{ detail.email }}</div>
            <div class="mx-2 rounded-md">
              <div class="bg-green-600 mt-2 rounded-md px-2">
                <i class="fa fa-check text-xs"></i> Aktif
              </div>
            </div>
          </div>
          <div class="grid grid-cols-12 my-3 gap-8">
            <button
              class="col-span-3 text-center bg-blue-600 p-2 rounded-md font-bold transition-all duration-300 ease-out transform hover:-translate-y-1"
              @click="edit(detail.id)"
            >
              <i class="fa fa-edit"></i> Edit Profil
            </button>
            <button
              class="col-span-3 text-center bg-blue-600 p-2 rounded-md font-bold transition-all duration-300 ease-out transform hover:-translate-y-1"
            >
              <i class="fa fa-user"></i> Akun
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 w-full font-bold bg-indigo-800 pr-2 px-12">
      <div
        :class="{
          'col-span-2': true,
          'border-b-4': activeTab == 0,
          'py-2': true,
          'cursor-pointer': true,
          'text-gray-500': activeTab != 0,
          'text-gray-100': activeTab == 0,
          'rounded-sm': true
        }"
        @click="active(0)"
      >
        DATA SISWA
      </div>
      <div
        :class="{
          'col-span-3': true,
          'text-gray-500': activeTab != 1,
          'border-b-4': activeTab == 1,
          'py-2': true,
          'cursor-pointer': true,
          'text-gray-100': activeTab == 1,
          'rounded-sm': true
        }"
        @click="active(1)"
      >
        DATA ORANG TUA
      </div>
      <div
        :class="{
          'col-span-3': true,
          'text-gray-500': activeTab != 2,
          'border-b-4': activeTab == 2,
          'py-2': true,
          'cursor-pointer': true,
          'text-gray-100': activeTab == 2,
          'rounded-sm': true
        }"
        @click="active(2)"
        v-if="detail.jabatan == 'guru'"
      >
        JADWAL MENGAJAR
      </div>
    </div>
    <div class="bg-white rounded-b-md p-4">
      <div v-show="activeTab == 0" class="px-8 py-3">
        <div class="grid grid-cols-2 gap-8">
          <div>
            <div class="mt-3">
              <label for="nama" class="font-bold">NAMA</label>
              <div class="text-xl border-b-2">
                <div v-if="detail.nama">
                  {{ detail.nama }}
                </div>
                <div v-else>
                  -
                </div>
              </div>
            </div>
            <div class="mt-3">
              <label for="nip" class="font-bold">NIPD</label>
              <div class="text-xl border-b-2">
                <div v-if="detail.nipd">
                  {{ detail.nipd }}
                </div>
                <div v-else>
                  -
                </div>
              </div>
            </div>
            <div class="mt-3">
              <label for="nip" class="font-bold">NIK</label>
              <div class="text-xl border-b-2">
                <div v-if="detail.nik">
                  {{ detail.nik }}
                </div>
                <div v-else>
                  -
                </div>
              </div>
            </div>
            <div class="mt-3">
              <label for="nip" class="font-bold">EMAIL</label>
              <div class="text-xl border-b-2">
                <div v-if="detail.email">
                  {{ detail.email }}
                </div>
                <div v-else>
                  -
                </div>
              </div>
            </div>
            <div class="mt-3">
              <label for="nip" class="font-bold">TEMPAT LAHIR</label>
              <div class="text-xl border-b-2">
                <div v-if="detail.tmpt_lahir">
                  {{ detail.tmpt_lahir }}
                </div>
                <div v-else>
                  -
                </div>
              </div>
            </div>
            <div class="mt-3">
              <label for="nip" class="font-bold">NOMOR HANDPHONE</label>
              <div class="text-xl border-b-2">
                <div v-if="detail.hp">
                  {{ detail.hp }}
                </div>
                <div v-else>
                  -
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="mt-3">
              <label for="nama" class="font-bold">JENIS KELAMIN</label>
              <div class="text-xl border-b-2">
                <div v-if="detail.jenis_kelamin">
                  {{ detail.jenis_kelamin }}
                </div>
                <div v-else>
                  -
                </div>
              </div>
            </div>
            <div class="mt-3">
              <label for="nip" class="font-bold">NISN</label>
              <div class="text-xl border-b-2">
                <div v-if="detail.nisn">
                  {{ detail.nisn }}
                </div>
                <div v-else>
                  -
                </div>
              </div>
            </div>
            <div class="mt-3">
              <label for="nip" class="font-bold">AGAMA</label>
              <div class="text-xl border-b-2">
                <div v-if="detail.agama">
                  {{ detail.agama }}
                </div>
                <div v-else>
                  -
                </div>
              </div>
            </div>
            <div class="mt-3">
              <label for="nip" class="font-bold">ROMBEL</label>
              <div class="text-xl border-b-2">
                <div v-if="detail.rombel">
                  {{ detail.rombel }}
                </div>
                <div v-else>
                  -
                </div>
              </div>
            </div>
            <div class="mt-3">
              <label for="nip" class="font-bold">TANGGAL LAHIR</label>
              <div class="text-xl border-b-2">
                <div v-if="detail.tgl_lahir">
                  {{ detail.tgl_lahir }}
                </div>
                <div v-else>
                  -
                </div>
              </div>
            </div>
            <div class="mt-3">
              <label for="nip" class="font-bold">ALAMAT</label>
              <div class="text-xl border-b-2">
                <div v-if="detail.alamat">
                  {{ detail.alamat }}, {{ detail.rt }}, {{ detail.rw }},
                  {{ detail.kelurahan }}, {{ detail.kecamatan }}
                </div>
                <div v-else>
                  -
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="activeTab == 1">
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(ortu, index) in detail.Ortus" :key="index">
            <div class="">
                DATA {{ ortu.status.toUpperCase() }}
            </div>
          </div>
        </div>
      </div>
      <div v-show="activeTab == 2 && detail.jabatan == 'guru'">
        TABS 3
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
// eslint-disable vue/no-unused-vars
// eslint-disable-line no-unused-vars
import profil from "@/assets/user3.webp";
import axios from "axios";

export default {
  data() {
    return {
      activeTab: 0,
      profil: profil,
      detail: null
    };
  },
  mounted() {
    this.getDetail(this.$route.params.id);
  },
  methods: {
    active(value) {
      this.activeTab = value;
    },
    back() {
      this.$router.push({ name: "ListSiswa" });
    },
    getDetail(id) {
      axios
        .get("/api/profil/siswa/" + id)
        .then(response => {
          this.detail = response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    edit(id) {}
  }
};
</script>
