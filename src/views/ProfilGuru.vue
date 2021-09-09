<template>
  <div class="px-5 mt-20">
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-4">
        <div class="w-full rounded-lg overflow-hidden shadow-lg">
          <img
            class="w-full h-48"
            src="https://image.freepik.com/free-vector/happy-kids-running-outside-near-school-isolated-flat-vector-illustration-cartoon-children-going-along-road-school-entrance-education-childhood-concept_74855-13113.jpg"
            alt="Sunset in the mountains"
          />
          <img src="https://picsum.photos/id/1005/200/300" alt="profil" class="rounded-full h-32 w-32 absolute -mt-24 mx-32">
          <div class="px-4 pt-10 grid grid-cols-2 gap-2">
           <div class="col-span-1">
             <button class="bg-blue-800 p-2 w-full text-white text-center rounded-md transition-all duration-300 ease-out transform hover:-translate-y-1 font-bold">
               <i class="fa fa-lock"></i> Ganti Password
             </button>
           </div>
           <div class="col-span-1">
             <button class="p-2 bg-blue-800 text-white w-full text-center rounded-md transition-all duration-300 ease-out transform hover:-translate-y-1 font-bold">
               <i class="fa fa-edit"></i> Edit Profil
             </button>
           </div>
          </div>
          <div class="grid grid-cols-12 text-center pt-4 px-2 pb-10">
            <div class="col-span-4 text-center">
              <div class="font-bold text-2xl">22</div>
              <div class="font-bold text-gray-700">E-Learning</div>
            </div>
            <div class="col-span-4">
              <div class="font-bold text-2xl">10</div>
              <div class="font-bold text-gray-700">Tugas</div>
            </div>
            <div class="col-span-4">
              <div class="font-bold text-2xl">8</div>
              <div class="font-bold text-gray-700">Kelas</div>
            </div>
          </div>
        </div>
        <div class="my-5 bg-white rounded-md shadow-md">
          <div class="font-bold text-xl border-b-2 border-gray-600 p-3">
            Mata Pelajaran
          </div>
          <div class="p-3">
            <div class="font-bold text-sm my-2 bg-indigo-400 text-center text-white rounded-md">
              Matematika (Teknik Komputer & Jaringan)
            </div>
            <div class="font-bold my-2 bg-indigo-400 text-center text-white rounded-md text-sm">
              Bahasa Indonesia (Teknik Komputer & Jaringan)
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-8">
        <div class="bg-white shadow-md rounded-md p-3">
          <div class="font-bold text-2xl text-gray-700">
            Biodata
          </div>
          <hr>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <div class="my-2">
                <label for="nama" class="font-bold">Nama</label>
                <div class="text-lg">
                  FARAH ADELIA
                </div>
              </div>
            </div>
            <div>
              <div class="my-2">
                <label for="nama" class="font-bold">Jenis Kelamin</label>
                <div class="text-lg">
                </div>
              </div>
            </div>
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
import axios from 'axios'

export default {
  name: "Home",
  data: () => ({
    active: false,
    email: "",
    password: "",
    remember: false,
    user: JSON.parse(localStorage.getItem('user')),
    profil: null
  }),
  mounted () {
    this.getProfil(this.user.id)
  },
  methods: {
    getProfil (id) {
      axios.get('/api/profil/user/' + id).then(response => {
        this.profil = response.data.data
        console.log(this.profil)
      }).catch(error => {
        console.log(error)
      })
    }
  }
};
</script>

<style scoped>
.custom-hover:hover {
  cursor: pointer;
  transform: translateY(-10px);
  transition: all ease 0.3s;
}
</style>
