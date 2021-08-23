<template>
  <div class="mt-0">
    <div class="bg-custom">
      <div class="py-16 text-white">
        <div class="mx-8 py-10 grid grid-cols-12 gap-4">
          <div class="col-span-8">
            <h1 class="text-3xl font-bold">Selamat Datang, {{ user.nama }}</h1>
            <h4 class="text-xl">
              Ini adalah Portal Halaman Sekolah & E-Learning untuk Guru, Sesi
              mengajar saat ini adalah Semester Genap TA 2020/2021
            </h4>
            <div class="mt-3">
              <div class="bg-indigo-400 w-3/12 p-2 rounded-md text-center hover:bg-indigo-600 cursor-pointer font-bold transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-lg" @click="profil">
                <i class="fa fa-user"></i> Lihat Profil
              </div>
            </div>
            <div class="mt-10">
              <div class="grid grid-cols-12 gap-8">
                <div class="col-span-3 text-xl font-bold">
                  <h5>Total E-Learning</h5>
                  <h1>18</h1>
                </div>
                <div class="col-span-3 text-xl font-bold">
                  <h5>Total Tugas</h5>
                  <h1>8</h1>
                </div>
                <div class="col-span-3 text-xl font-bold">
                  <h5>Total Kelas</h5>
                  <h1>6</h1>
                </div>
                <div class="col-span-3 text-xl font-bold">
                  <h5>Total Siswa</h5>
                  <h1>400</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center col-span-4">
            <i class="fa fa-building fa-10x"></i>
            <h1 class="text-3xl font-bold">SMK MUSDA PERBAUNGAN</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="my-5 px-5 container">
      <div class="font-bold text-lg">
        <h5>Daftar Tugas Hari Ini</h5>
      </div>
      <carousel :nav="true" autoplay :autoplayHoverPause="true">
        <div class="max-w-sm rounded-lg overflow-hidden shadow-lg m-3 transition duration-300 ease-out transform hover:-translate-y-2 cursor-pointer">
          <div class="absolute p-1 shadow-md text-sm rounded-md bg-white font-bold m-2">
            MATEMATIKA
          </div>
          <img
            class="w-64 h-64"
            src="https://picsum.photos/seed/picsum/200/300"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >#photography</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >#travel</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >#winter</span
            >
          </div>
        </div>
      </carousel>
      <div class="my-5">
        <button class="bg-blue-500 p-2 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 ease-out transform hover:-translate-y-2 hover:shadow-lg focus:outline-none">
          <i class="fa fa-book"></i> Lihat Semua Tugas
        </button>
      </div>
    </div>
    <div class="my-5 px-5 container">
      <div class="font-bold text-lg">
        <h5>Daftar E-Learning Hari Ini</h5>
      </div>
      <carousel :nav="true" autoplay :autoplayHoverPause="true">
        <div class="w-64 rounded-lg overflow-hidden shadow-lg m-3 cursor-pointer transition duration-300 ease-out transform hover:-translate-y-2">
          <div class="absolute p-1 shadow-md text-sm rounded-md bg-white font-bold m-2">
            MATEMATIKA
          </div>
          <img
            class="w-full h-48"
            src="https://picsum.photos/seed/picsum/200/300"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >#photography</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >#travel</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >#winter</span
            >
          </div>
        </div>
      </carousel>
      <div class="my-5">
        <button class="bg-blue-500 p-2 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 ease-out transform hover:-translate-y-2 hover:shadow-lg focus:outline-none">
          <i class="fa fa-book"></i> Lihat Semua E-Learning
        </button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
// eslint-disable vue/no-unused-vars
// eslint-disable-line no-unused-vars
import ilus from "@/assets/Books.png";
import carousel from "vue-owl-carousel2";

export default {
  name: "Home",
  components: {
    carousel
  },
  data() {
    return {
      ilus: ilus,
      user: JSON.parse(localStorage.getItem('user')),
      users: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          website: "hildegard.org"
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          website: "anastasia.net"
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          website: "ramiro.info"
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
          website: "kale.biz"
        },
        {
          id: 5,
          name: "Chelsey Dietrich",
          username: "Kamren",
          email: "Lucio_Hettinger@annie.ca",
          website: "demarco.info"
        },
        {
          id: 6,
          name: "Mrs. Dennis Schulist",
          username: "Leopoldo_Corkery",
          email: "Karley_Dach@jasper.info",
          website: "ola.org"
        },
        {
          id: 7,
          name: "Kurtis Weissnat",
          username: "Elwyn.Skiles",
          email: "Telly.Hoeger@billy.biz",
          website: "elvis.io"
        },
        {
          id: 8,
          name: "Nicholas Runolfsdottir V",
          username: "Maxime_Nienow",
          email: "Sherwood@rosamond.me",
          website: "jacynthe.com"
        },
        {
          id: 9,
          name: "Glenna Reichert",
          username: "Delphine",
          email: "Chaim_McDermott@dana.io",
          website: "conrad.com"
        },
        {
          id: 10,
          name: "Clementina DuBuque",
          username: "Moriah.Stanton",
          email: "Rey.Padberg@karina.biz",
          website: "ambrose.net"
        }
      ]
    };
  },
  methods: {
    profil() {
      this.$router.push("/profil");
    }
  }
};
</script>

<style scoped>
.bg-custom {
  background-color: #21467a;
}
.bg-success-custom {
  background-color: #04d130;
}
</style>
