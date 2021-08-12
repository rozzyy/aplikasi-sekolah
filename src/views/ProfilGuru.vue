<template>
  <div class="container">
    <b-card class="shadow-sm container">
      <b-row>
        <b-col md="2">
          <vs-avatar size="150" circle>
            <img src="https://picsum.photos/id/1074/200/300" alt="" />
          </vs-avatar>
        </b-col>
        <b-col md="6">
          <div class="my-3">
            <h3>Abdul Hakim</h3>
            <div class="d-flex justify-content-start py-3 center">
              <vs-button-group>
                <vs-button>
                  Ganti Password
                </vs-button>
                <vs-button>
                  Edit Profil
                </vs-button>
              </vs-button-group>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="my-3">
            <b-row>
              <b-col md="4">
                <div class="my-2">
                  Social Media
                </div>
              </b-col>
              <b-col>
                <div class="center con-avatars">
                  <b-row>
                    <b-col>
                      <vs-avatar>
                        <i class="fab fa-facebook-f"></i>
                      </vs-avatar>
                    </b-col>
                    <b-col>
                      <vs-avatar>
                        <i class="fab fa-instagram"></i>
                      </vs-avatar>
                    </b-col>
                    <b-col>
                      <vs-avatar>
                        <i class="fab fa-twitter"></i>
                      </vs-avatar>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-card>
    <div class="my-4">
      <b-row>
        <b-col>
          <b-card class="shadow-sm">
            <h5 class="mb-3">BIODATA GURU</h5>
            <b-row>
              <b-col>
                <div>
                  <label for="nama" class="text-primary">Nama</label>
                  <h6>Abdul Hakim</h6>
                </div>
                <div>
                  <label for="nama" class="text-primary">Nomor Guru</label>
                  <h6>1234567890</h6>
                </div>
                <div>
                  <label for="nama" class="text-primary"
                    >Tempat & Tanggal Lahir</label
                  >
                  <h6>Desa Simaru, 07 Februari 2007</h6>
                </div>
                <div>
                  <label for="nama" class="text-primary">Email</label>
                  <h6>guru2@gmail.com</h6>
                </div>
              </b-col>
              <b-col>
                <div>
                  <label for="nama" class="text-primary">Jenis Kelamin</label>
                  <h6>Laki - laki</h6>
                </div>
                <div>
                  <label for="nama" class="text-primary">No. Hp</label>
                  <h6>1234567890</h6>
                </div>
                <div>
                  <label for="nama" class="text-primary">Agama</label>
                  <h6>Islam</h6>
                </div>
                <div>
                  <label for="nama" class="text-primary">Alamat</label>
                  <h6>Jalan Utama Desa Simaru No. 89</h6>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="shadow-sm">
            <h5 class="mb-3">STATUS GURU</h5>
            <div>
              <b-row>
                <b-col>
                  <div>
                    <label for="nama" class="text-primary">Status Guru</label>
                    <h6>PNS</h6>
                  </div>
                  <div>
                    <label for="nama" class="text-primary"
                      >Mengajar Sejak</label
                    >
                    <h6>1945</h6>
                  </div>
                  <div>
                    <label for="nama" class="text-primary">Provinsi</label>
                    <h6>Sumatera Utara</h6>
                  </div>
                  <div>
                    <label for="nama" class="text-primary">Kab./Kota</label>
                    <h6>Kab. Batu Bara</h6>
                  </div>
                </b-col>
                <b-col>
                  <div>
                    <label for="nama" class="text-primary"
                      >Pendidikan Terakhir</label
                    >
                    <h6>S1</h6>
                  </div>
                  <div>
                    <label for="nama" class="text-primary">Jurusan</label>
                    <h6>PENDIDIKAN AGAMA</h6>
                  </div>
                  <div>
                    <label for="nama" class="text-primary">Lembaga</label>
                    <h6>UNIVERSITAS NEGERI MEDAN</h6>
                  </div>
                  <div>
                    <label for="nama" class="text-primary">Tahun Lulus</label>
                    <h6>2004</h6>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <div class="my-3">
      <b-row>
        <b-col>
          <h5>Author Summary</h5>
          <b-row>
            <b-col md="6">
              <b-card class="shadow-sm custom-hover">
                <b-row>
                  <b-col md="2">
                    <i class="fa fa-graduation-cap fa-2x my-2"></i>
                  </b-col>
                  <b-col>
                    <h6>E-Learning</h6>
                    <h2>
                      18
                    </h2>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col md="6">
              <b-card class="shadow-sm custom-hover">
                <b-row>
                  <b-col md="2">
                    <i class="fa fa-book fa-2x my-2"></i>
                  </b-col>
                  <b-col>
                    <h6>Tugas</h6>
                    <h2>
                      20
                    </h2>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col md="6" class="mt-2">
              <b-card class="shadow-sm custom-hover">
                <b-row>
                  <b-col md="2">
                    <i class="far fa-clipboard fa-2x my-2"></i>
                  </b-col>
                  <b-col>
                    <h6>Soal</h6>
                    <h2>
                      0
                    </h2>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col md="6" class="mt-2">
              <b-card class="shadow-sm custom-hover">
                <b-row>
                  <b-col md="2">
                    <i class="fa fa-chalkboard fa-2x my-2"></i>
                  </b-col>
                  <b-col>
                    <h6>Jumlah Kelas Yang Diampu</h6>
                    <h2>
                      3
                    </h2>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <h5>Mata Pelajaran</h5>
          <b-card class="container">
            <b-row>
              <b-col md="6" class="d-flex justify-content-center">
                <vs-button flat>
                  Teknik Komputer Jaringan (TKJ)
                </vs-button>
              </b-col>
              <b-col md="6">
                <vs-button flat>
                  Rekayasa Perangkat Lunak (RPL)
                </vs-button>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
// eslint-disable vue/no-unused-vars
// eslint-disable-line no-unused-vars
export default {
  name: "Home",
  data: () => ({
    active: false,
    email: "",
    password: "",
    remember: false,
    series: [44, 55, 41, 17],
    chartOptions: {
      chart: {
        type: "donut"
      },
      labels: ["Sakit", "Hadir", "Izin", "Absen"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    }
  }),
};
</script>

<style scoped>
.custom-hover:hover {
  cursor: pointer;
  transform: translateY(-10px);
  transition: all ease 0.3s;
}
</style>
