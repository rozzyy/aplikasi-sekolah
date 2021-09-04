<template>
  <div>
    <div class="bg-white shadow-md p-5 rounded-md">
      <div class="grid grid-cols-2">
        <div class="text-2xl font-bold">
          Akun Siswa
        </div>
        <div>
          <div class="float-right" @mouseover="hover = true" @mouseleave="hover = false">
            <button class="bg-green-500 font-bold text-white rounded-full w-12 h-12 hover:bg-green-600 shadow-md focus:outline-none fixed -ml-12 transition duration-300 ease-out transform hover:-translate-y-2 z-40">
                <i class="fa fa-plus"></i>
            </button>
            <div v-if="hover" class="fixed -ml-48 -mt-6 bg-gray-800 text-white px-2 rounded-md shadow-lg font-bold">
                Tambah Akun Siswa
            </div>
          </div>
        </div>
        <div class="mt-5 inline-flex">
            <div class="p-2 text-gray-400 border-l border-t border-b rounded-l-full">
                <i class="fa fa-search"></i>
            </div>
            <input type="text" class="border-r border-t border-b w-64 p-2 rounded-r-full focus:outline-none" placeholder="Cari User Aktif">
        </div>
      </div>
      <div class="my-5">
          <table class="min-w-full border">
              <thead class="border-b">
                  <tr class="bg-gray-100">
                      <th :class="{'text-left': true, 'px-6': true, 'uppercase': true, 'border-blue-200': true, 'text-blue-500': true, 'w-10': field.title == 'No.' }" v-for="(field, index) in field" :key="index">
                          {{ field.title }}
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(data, index) in data" :key="index" class="bg-gray-100 hover:shadow-lg transform hover:-translate-y-2 cursor-pointer font-mon">
                    <td class="py-3">
                        <div class="overflow-hidden bg-gray-500 rounded-full w-12 h-12 m-auto">
                            <img src="https://picsum.photos/id/1005/200/300" alt="foto" class="w-12">
                        </div>
                    </td>
                    <td v-for="(key, value) in data" :key="value" class="py-3">
                        {{ key }}
                    </td>
                    <td class="grid grid-cols-3 text-white gap-2 px-2 py-3">
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
  </div>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
// eslint-disable vue/no-unused-vars
// eslint-disable-line no-unused-vars
export default {
  data() {
    return {
      hover: false,
      data: [
          {
              nip: '12098689',
              nama: 'Supriono',
              email: 'supriono@gmail.com'
          },
          {
              nip: '12098689',
              nama: 'Supriono',
              email: 'supriono@gmail.com'
          },
          {
              nip: '12098689',
              nama: 'Supriono',
              email: 'supriono@gmail.com'
          }
      ],
      field: [
          {
              title: ''
          },
           {
              title: 'NISN'
          },
           {
              title: 'Nama'
          },
           {
              title: 'Email'
          },
          {
              title: 'Aksi'
          }
      ]
    };
  }
};
</script>
