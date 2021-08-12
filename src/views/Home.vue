<template>
  <div class="mt-0">
    <div class="bg-custom rounded">
      <div class="container py-5 text-white">
        <b-row>
          <b-col>
            <h1>Selamat Datang, Abdul Hakim</h1>
            <h4>
              Ini adalah Portal Halaman Sekolah & E-Learning untuk Guru, Sesi
              mengajar saat ini adalah Semester Genap TA 2020/2021
            </h4>
            <div class="mt-3">
              <vs-button gradient size="xl" @click="profil">
                <i class="fa fa-user mx-2"></i> Lihat Profil
              </vs-button>
            </div>
            <div class="mt-5">
              <b-row>
                <b-col md="4">
                  <h5>Total E-Learning</h5>
                  <h1>18</h1>
                </b-col>
                <b-col>
                  <h5>Total Tugas</h5>
                  <h1>8</h1>
                </b-col>
                <b-col>
                  <h5>Total Kelas</h5>
                  <h1>6</h1>
                </b-col>
                <b-col>
                  <h5>Total Siswa</h5>
                  <h1>400</h1>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col class="text-center">
            <i class="fa fa-school fa-10x"></i>
            <h1>SMK CONTOH</h1>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="center my-3 container">
      <h5>Jadwal Mengajar Hari Ini</h5>
      <vs-table striped>
        <template #thead>
          <vs-tr>
            <vs-th>
              Waktu
            </vs-th>
            <vs-th>
              Ruangan
            </vs-th>
            <vs-th>
             Kelas
            </vs-th>
            <vs-th>
             Mata Pelajaran
            </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr :key="i" v-for="(tr, i) in users" :data="tr">
            <vs-td>
              {{ tr.name }}
            </vs-td>
            <vs-td>
              {{ tr.email }}
            </vs-td>
            <vs-td>
              {{ tr.id }}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
    <div class="my-5 container">
      <div>
        <h5>Daftar Tugas Hari Ini</h5>
      </div>
      <carousel loop :nav="false" autoplay :autoplayHoverPause="true">
        <vs-card v-for="(card, index) in 6" :key="index">
          <template #title>
            <h3>Pot with a plant</h3>
          </template>
          <template #img>
            <img :src="`https://picsum.photos/id/${card}/200/300`" alt="" />
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
          <template #interactions>
            <vs-button danger icon>
              <i class="bx bx-heart"></i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <i class="bx bx-chat"></i>
              <span class="span">
                54
              </span>
            </vs-button>
          </template>
        </vs-card>
      </carousel>
      <div>
        <vs-button>
          <i class="fa fa-book mx-2"></i> Lihat Semua Tugas
        </vs-button>
      </div>
    </div>
    <div class="my-5 container">
      <div>
        <h5>Daftar E-Learning Hari Ini</h5>
      </div>
      <carousel loop :nav="false" autoplay :autoplayHoverPause="true">
        <vs-card v-for="(card, index) in 6" :key="index">
          <template #title>
            <h3>Pot with a plant</h3>
          </template>
          <template #img>
            <img :src="`https://picsum.photos/id/${card}/200/300`" alt="" />
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
          <template #interactions>
            <vs-button danger icon>
              <i class="bx bx-heart"></i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <i class="bx bx-chat"></i>
              <span class="span">
                54
              </span>
            </vs-button>
          </template>
        </vs-card>
      </carousel>
      <div>
        <vs-button>
          <i class="fa fa-graduation-cap mx-2"></i> Lihat Semua E-Learning
        </vs-button>
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
      users: [
          {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "website": "hildegard.org",
          },
          {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "website": "anastasia.net",
          },
          {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "website": "ramiro.info",
          },
          {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "website": "kale.biz",
          },
          {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "website": "demarco.info",
          },
          {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "website": "ola.org",
          },
          {
            "id": 7,
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
            "website": "elvis.io",
          },
          {
            "id": 8,
            "name": "Nicholas Runolfsdottir V",
            "username": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me",
            "website": "jacynthe.com",
          },
          {
            "id": 9,
            "name": "Glenna Reichert",
            "username": "Delphine",
            "email": "Chaim_McDermott@dana.io",
            "website": "conrad.com",
          },
          {
            "id": 10,
            "name": "Clementina DuBuque",
            "username": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz",
            "website": "ambrose.net",
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
