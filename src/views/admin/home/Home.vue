<template>
  <div>
    <div class="grid grid-cols-12 gap-12">
      <div class="col-span-4">
        <div class="bg-white rounded-md p-4 shadow-md">
          <div class="grid grid-cols-12">
            <div class="col-span-7">
              <div class="text-sm font-bold">
                TOTAL SISWA
              </div>
              <div class="font-bold text-3xl">
                130
              </div>
              <div class="my-2">
                <button
                  class="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600 transition duration-300 ease-out transform hover:-translate-y-1 hover:shadow-md"
                >
                  <i class="fa fa-eye"></i> Lihat Detail
                </button>
              </div>
            </div>
            <div class="col-span-5">
              <i class="fa fa-users fa-4x m-5"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-4">
        <div class="bg-white rounded-md p-4 shadow-md">
          <div class="grid grid-cols-12">
            <div class="col-span-7">
              <div class="text-sm font-bold">
                TOTAL GURU
              </div>
              <div class="font-bold text-3xl">
                40
              </div>
              <div class="my-2">
                <button
                  class="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600 transition duration-300 ease-out transform hover:-translate-y-1 hover:shadow-md"
                >
                  <i class="fa fa-eye"></i> Lihat Detail
                </button>
              </div>
            </div>
            <div class="col-span-5">
              <i class="fa fa-user-tie fa-4x m-5"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-4">
        <div class="bg-white rounded-md p-4 shadow-md">
          <div class="grid grid-cols-12">
            <div class="col-span-7">
              <div class="text-sm font-bold">
                TOTAL STAFF
              </div>
              <div class="font-bold text-3xl">
                20
              </div>
              <div class="my-2">
                <button
                  class="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600 transition duration-300 ease-out transform hover:-translate-y-1 hover:shadow-md"
                >
                  <i class="fa fa-eye"></i> Lihat Detail
                </button>
              </div>
            </div>
            <div class="col-span-5">
              <i class="fa fa-user-md fa-4x m-5"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white my-5 rounded-md">
      <div class="bg-white rounded-md">
        <div class="border-b-2 p-4 font-bold text-xl">
          Laporan Data Sekolah
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
              <div class="bg-white rounded-md shadow-md">
                <div class="font-bold text-xl p-5">
                  Jumlah Siswa Per Jurusan TA 2021/2022
                </div>
                <div class="flex place-content-center">
                  <apexcharts width="600" type="pie" :options="options" :series="series"></apexcharts>
                </div>
              </div>
            </div>
            <div v-show="activeTab == 1">
              <div class="bg-white rounded-md shadow-md">
                <div class="font-bold text-xl p-5">
                  Jumlah Guru Per Jurusan TA 2021/2022
                </div>
                <div class="flex place-content-center">
                  <apexcharts width="600" type="pie" :options="kelasOptions" :series="seriesKelas"></apexcharts>
                </div>
              </div>
            </div>
            <div v-show="activeTab == 2">
              <div class="font-bold text-xl p-5">
                  Jumlah Kelas TA 2021/2022
                </div>
                <div class="flex place-content-center">
                  <apexcharts width="600" type="pie" :options="guruOptions" :series="seriesGuru"></apexcharts>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="bg-white my-3">
      <div>
        <apexcharts type="bar" :options="options" :series="series"></apexcharts>
      </div>
    </div> -->
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
      options: {
        labels: ["Teknik Komputer Jaringan", "Rekayasa Perangkat Lunak", "Mekanisme Pertanian"],
        tooltip: {
          y: {
            formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
            return value + ' siswa'
            }
          }
        }
      },
      series: [44, 50, 30],
      kelasOptions: {
        labels: ["Teknik Komputer Jaringan", "Rekayasa Perangkat Lunak", "Mekanisme Pertanian"],
        tooltip: {
          y: {
            formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
            return value + ' guru'
            }
          }
        }
      },
      seriesKelas: [44, 50, 20],
      guruOptions: {
        labels: ["X", "XII", "XII"],
        tooltip: {
          y: {
            formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
            return value + ' kelas'
            }
          }
        }
      },
      seriesGuru: [44, 50, 20],
      tabs: [
        {
          name: "Siswa"
        },
        {
          name: "Guru"
        },
        {
          name: "Kelas"
        }
      ],
      activeTab: 0,
    };
  }
};
</script>
