<template>
  <div class="bg-white p-5 rounded-lg">
    <div class="my-4 grid grid-cols-12">
        <div class="text-xl font-bold col-span-6">
            Daftar Ruangan Sekolah
        </div>
        <div class="col-span-6">
            <div class="float-right">
                <button class=" bg-green-500 hover:shadow-md hover:bg-green-600 rounded-lg p-2 text-white font-bold">
                    <i class="fa fa-plus"></i> Tambah Ruangan Kelas
                </button>
            </div>
        </div>
    </div>
    <div class="rounded-lg">
      <div>
        <table class="min-w-full divide-y border">
          <thead class="bg-gray-300">
            <tr>
              <th class="text-left px-6 uppercase">No.</th>
              <th class="text-left px-6 uppercase">Nama Ruangan</th>
              <th class="text-left px-6 uppercase">Kategori Ruangan</th>
              <th class="text-left px-6 uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y">
            <tr>
              <td class="px-6 py-2 whitespace-no-wrap text-center">1</td>
              <td class="px-6 py-2 whitespace-no-wrap">Adam</td>
              <td class="px-6 py-2 whitespace-no-wrap">Adam</td>
              <td class="px-6 py-2 whitespace-no-wrap">Adam</td>
            </tr>
            <tr>
              <td class="px-6 py-2 whitespace-no-wrap text-center">2</td>
              <td class="px-6 py-2 whitespace-no-wrap">Adam</td>
              <td class="px-6 py-2 whitespace-no-wrap">Adam</td>
              <td class="px-6 py-2 whitespace-no-wrap">Adam</td>
            </tr>
          </tbody>
        </table>
        <div class="text-center my-3">
            <span class="mx-3">
                <button class="bg-blue-500 rounded-md text-white py-1 px-3">
                    Prev
                </button>
            </span>
            <span>
                <button class="bg-blue-500 rounded-md text-white py-1 px-3">
                    Next
                </button>
            </span>
        </div>
      </div>
    </div>
  </div>
</template>
