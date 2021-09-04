<template>
  <div>
    <div class="bg-white shadow-md p-5 rounded-md">
      <div class="grid grid-cols-2">
        <div class="text-2xl font-bold">
          Akun Staff
        </div>
        <div>
          <div class="grid grid-cols-12">
            <div class="col-span-10">
              <div
                class="float-right"
                @mouseover="hoverRef = true"
                @mouseleave="hoverRef = false"
              >
                <button
                  class="bg-blue-500 rounded-full w-12 h-12 text-white hover:bg-blue-700  transition duration-300 ease-out transform hover:-translate-y-2 z-40 focus:outline-none"
                  @click="refresh"
                >
                  <i class="fa fa-redo-alt"></i>
                </button>
                <div
                  v-if="hoverRef"
                  class="fixed -ml-24 -mt-16 bg-gray-800 text-white px-2 rounded-md shadow-lg font-bold"
                >
                  Muat Ulang
                </div>
              </div>
            </div>
            <div class="col-span-2">
              <div
                @mouseover="hover = true"
                @mouseleave="hover = false"
                class="float-right"
              >
                <button
                  class="bg-green-500 font-bold text-white rounded-full w-12 h-12 hover:bg-green-600 shadow-md focus:outline-none fixed -ml-12 transition duration-300 ease-out transform hover:-translate-y-2 z-40"
                  @click="create"
                >
                  <i class="fa fa-plus"></i>
                </button>
                <div
                  v-if="hover"
                  class="fixed -ml-48 -mt-6 bg-gray-800 text-white px-2 rounded-md shadow-lg font-bold"
                >
                  Tambah Akun Staff
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 inline-flex">
          <div
            class="p-2 text-gray-400 border-l border-t border-b rounded-l-full"
          >
            <i class="fa fa-search"></i>
          </div>
          <input
            type="text"
            class="border-r border-t border-b w-64 p-2 rounded-r-full focus:outline-none"
            placeholder="Cari User Aktif"
          />
        </div>
      </div>
      <div class="my-5">
        <table class="min-w-full border">
          <thead class="border-b">
            <tr class="bg-gray-100">
              <th></th>
              <th
                :class="{
                  'text-left': true,
                  'px-6': true,
                  uppercase: true,
                  'border-blue-200': true,
                  'text-blue-500': true,
                  'w-10': field.title == 'No.'
                }"
                v-for="(field, index) in field"
                :key="index"
              >
                {{ field.title }}
              </th>
              <th class="uppercase text-left text-blue-500">Aksi</th>
            </tr>
          </thead>
          <tr v-if="User.isLoading">
            <td colspan="5" class="font-bold text-center text-indigo-400 py-2">
              <i class="fa fa-spinner animate-spin"></i> Loading...
            </td>
          </tr>
          <tr v-else-if="User.total_page == 0">
            <td colspan="5" class="text-center text-blue-600 py-2 font-bold">
              Data belum tersedia.
            </td>
          </tr>
          <tbody v-else>
            <tr
              v-for="(data, index) in User.user"
              :key="index"
              class="bg-gray-100 hover:shadow-lg transform hover:-translate-y-2 cursor-pointer font-mon"
            >
              <td class="py-3">
                <div
                  class="overflow-hidden bg-gray-500 rounded-full w-12 h-12 m-auto"
                >
                  <img
                    src="https://picsum.photos/id/1005/200/300"
                    alt="foto"
                    class="w-12"
                  />
                </div>
              </td>
              <td
                v-for="(item, index) in field"
                :key="index"
                class="font-mono pl-6"
              >
                {{ data[item.name] }}
              </td>
              <td class="grid grid-cols-3 text-white gap-2 px-3 py-3">
                <button class="bg-blue-500 rounded-md py-2 hover:bg-blue-700">
                  <i class="fa fa-edit"></i>
                </button>
                <button class="bg-yellow-500 rounded-md hover:bg-yellow-700">
                  <i class="fa fa-lock"></i>
                </button>
                <button class="bg-red-500 rounded-md hover:bg-red-700">
                  <i class="fa fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-center my-2">
          <div class="inline-flex">
            <button
              class="bg-blue-500 p-2 rounded-l-md text-white font-bold hover:bg-blue-600 focus:outline-none"
            >
              Prev
            </button>
            <button
              class="bg-blue-500 p-2 rounded-r-md text-white font-bold hover:bg-blue-600 focus:outline-none"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-black bg-opacity-50 absolute h-full w-full top-0 right-0 z-50"
      v-if="showModal"
    >
      <transition
        enter-active-class="transition-all duration-500 ease-out"
        leave-active-class="transition-all duration-500 ease-out"
        enter-class="transform -translate-y-20"
        appear
      >
        <div class="bg-white mx-auto w-6/12 mt-20 rounded-md">
          <div class="grid grid-cols-2 border-b p-3">
            <div class="font-bold">
              Tambah Akun Staff
            </div>
            <div>
              <button @click="close" class="focus:outline-none hover:text-gray-500 float-right">
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>
          <div class="p-3">
          </div>
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
import { mapState } from "vuex";

export default {
  data() {
    return {
      hover: false,
      hoverRef: false,
      data: [
        {
          nip: "12098689",
          nama: "Supriono",
          email: "supriono@gmail.com"
        },
        {
          nip: "12098689",
          nama: "Supriono",
          email: "supriono@gmail.com"
        },
        {
          nip: "12098689",
          nama: "Supriono",
          email: "supriono@gmail.com"
        }
      ],
      field: [
        {
          title: "NIP",
          name: "no_induk"
        },
        {
          title: "Nama",
          name: "nama"
        },
        {
          title: "Email",
          name: "email"
        }
      ],
      showModal: false
    };
  },
  computed: {
    ...mapState(["User"])
  },
  mounted() {
    this.$store.dispatch("User/getDataUser", { role: 4, page: 0, limit: 10 });
  },
  methods: {
    refresh() {
      this.$store.dispatch("User/getDataUser", { role: 4, page: 0, limit: 10 });
    },
    create () {
        this.showModal = true
    },
    close () {
      this.showModal = false
    }
  }
};
</script>
