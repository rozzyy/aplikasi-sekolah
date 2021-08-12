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
            <div>X-TKJ-3A</div>
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
            <h5 class="mb-3">BIODATA SISWA</h5>
            <b-row>
              <b-col>
                <div>
                  <label for="nama" class="text-primary">Nama</label>
                  <h6>Abdul Hakim</h6>
                </div>
                <div>
                  <label for="nama" class="text-primary">NISN</label>
                  <h6>1234567890</h6>
                </div>
                <div>
                  <label for="nama" class="text-primary"
                    >Tempat & Tanggal Lahir</label
                  >
                  <h6>Desa Simaru, 07 Februari 2007</h6>
                </div>
                <div>
                  <label for="nama" class="text-primary">Anak ke</label>
                  <h6>1 dari 3 bersaudara</h6>
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
            <h5 class="mb-3">BIODATA ORANG TUA / WALI</h5>
            <div>
              <b-row>
                <b-col>
                  <div>
                    <label for="nama" class="text-primary">Nama Ayah</label>
                    <h6>Sujarwo</h6>
                  </div>
                  <div>
                    <label for="nama" class="text-primary">Nama Ibu</label>
                    <h6>Sukanti</h6>
                  </div>
                  <div>
                    <label for="nama" class="text-primary">Nama Wali</label>
                    <h6>-</h6>
                  </div>
                  <div>
                    <label for="nama" class="text-primary"
                      >No. Telepon Orang Tua / Wali</label
                    >
                    <h6>1234567890</h6>
                  </div>
                </b-col>
                <b-col>
                  <div>
                    <label for="nama" class="text-primary"
                      >Pekerjaan Ayah</label
                    >
                    <h6>Karyawan Swasta</h6>
                  </div>
                  <div>
                    <label for="nama" class="text-primary">Pekerjaan Ibu</label>
                    <h6>Ibu Rumah Tangga</h6>
                  </div>
                  <div>
                    <label for="nama" class="text-primary">Status Wali</label>
                    <h6>-</h6>
                  </div>
                  <div>
                    <label for="nama" class="text-primary"
                      >Alamat Orang Tua / Wali</label
                    >
                    <h6>Jalan Utama Desa Simaru No. 89</h6>
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
          <b-row>
            <b-col md="6">
              <b-card class="shadow-sm custom-hover">
                <b-row>
                  <b-col md="2">
                    <i class="fa fa-fingerprint fa-2x my-2"></i>
                  </b-col>
                  <b-col>
                    <h6>Total Kehadiran</h6>
                    <h5>
                      36.65%
                    </h5>
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
                    <h6>Studi Ratio</h6>
                    <h5>
                      45.67
                    </h5>
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
                    <h6>Catatan BK</h6>
                    <h5>
                      0
                    </h5>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col md="6" class="mt-2">
              <b-card class="shadow-sm custom-hover">
                <b-row>
                  <b-col md="2">
                    <i class="fa fa-trophy fa-2x my-2"></i>
                  </b-col>
                  <b-col>
                    <h6>Total Prestasi</h6>
                    <h5>
                      1
                    </h5>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <b-card class="shadow-sm">
            <div class="text-center">
              <h6>Absensi Abdul Hakim X-TKJ-3A semester genap</h6>
            </div>
            <div>
              <b-row>
                <b-col offset="3" md="6">
                  <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
                </b-col>
              </b-row>
            </div>
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
        type: 'donut',
      },
      labels: ["Sakit", "Hadir", "Izin", "Absen"],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  })
};
</script>

<style scoped>
.custom-hover:hover {
  cursor: pointer;
  transform: translateY(-10px);
  transition: all ease 0.3s;
}
</style>
