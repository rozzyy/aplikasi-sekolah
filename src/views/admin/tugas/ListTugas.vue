<template>
  <div class="bg-white rounded-md p-4">
    <div class="grid grid-cols-12">
      <div class="font-bold text-2xl col-span-3">
        Daftar Tugas
      </div>
      <div class="col-span-9">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-5">
            <select
              name="cars"
              id="cars"
              class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
              form="form"
            >
              <option value="Teknik Kendaraan Ringa"
                >Teknik Kendaraan Ringan (TKR)</option
              >
              <option value="Mekanisme Pertanian"
                >Mekanisme Pertanian (MP)</option
              >
              <option value="Teknik Sepeda Motor"
                >Teknik Sepeda Motor (TSM)</option
              >
              <option value="Teknik Komputer Jaringan"
                >Teknik Komputer Jaringan (TKJ)</option
              >
              <option value="Rekayasa Perangkat Lunak"
                >Rekayasa Perangkat Lunak (RPL)</option
              >
            </select>
          </div>
          <div class="col-span-2">
            <select
              name="cars"
              id="cars"
              class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
              form="form"
            >
              <option value="X">X</option>
              <option value="XI">XI</option>
              <option value="XII">XII</option>
            </select>
          </div>
          <div class="col-span-3">
            <select
              name="cars"
              id="cars"
              class="bg-gray-100 border w-full rounded-md focus:outline-none focus:border-teal-400 focus:bg-white p-2"
              form="form"
            >
              <option value="Matematika">Matematika</option>
              <option value="Bahasa Indonesia">Bahasa Indonesia</option>
            </select>
          </div>
          <div class="col-span-2">
            <button
              class="bg-blue-600 p-2 text-white rounded-md text-center hover:bg-blue-700 w-full font-bold"
            >
              <i class="fa fa-search"></i> Cari
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="my-5">
      <div
        class="bg-green-600 w-2/12 p-2 text-center text-white font-bold rounded-sm"
      >
        Total Tugas: 20
      </div>
    </div>
  </div>
</template>
