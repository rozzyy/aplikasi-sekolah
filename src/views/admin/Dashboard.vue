<template>
  <div>
    <div class="flex">
      <div class="w-1/5 fixed">
        <div class="bg-indigo-700 text-white h-screen overflow-auto">
          <div class="bg-indigo-800 p-2">
            <div class="grid grid-cols-12">
              <div class="col-span-3">
                <i class="fab fa-500px fa-3x"></i>
              </div>
              <div class="col-span-9 font-bold">
                <div>
                  SMK MUSDA
                </div>
                <div>
                  PERBAUNGAN
                </div>
              </div>
            </div>
          </div>
          <div class="p-2">
            <ul>
              <li
                class="hover:bg-indigo-900 active:bg-indigo-900 p-2 rounded my-1 cursor-pointer"
                @click="notDropdown"
              >
                <div class="grid grid-cols-12">
                  <div class="col-span-2">
                    <i class="fa fa-tachometer-alt"></i>
                  </div>
                  <div class="col-span-10 font-bold">
                    Dashboard
                  </div>
                </div>
              </li>
              <li class="cursor-pointer my-2" v-for="(item, index) in menu" :key="index" @click="dropdown(item.name)">
                <div :class="{'grid': true, 'grid-cols-12': true, 'p-2': true, 'rounded': true, 'hover:bg-indigo-900': true, 'bg-indigo-900': menuName === item.name}">
                  <div class="col-span-2">
                    <i :class="item.icon"></i>
                  </div>
                  <div class="col-span-10 font-bold">
                    {{ item.name }} <i :class="{'fa': true, 'fa-angle-right': true, 'float-right': true, 'transform': true, 'rotate-90': menuName === item.name, 'transition-all': true, 'duration-200': true, 'ease-in': true}"></i>
                  </div>
                </div>
                <ul class="bg-indigo-800" v-if="menuName === item.name">
                  <li
                    class="p-3 ml-3 font-bold transition-all duration-300 ease-in transform hover:translate-x-2"
                    v-for="(children, index) in item.children" :key="index"
                  >
                    <i class="fa fa-angle-right"></i> {{ children.name }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-gray-200 w-4/5 ml-64">
        <nav class="bg-gray-100 w-4/5 fixed">
          <div class="grid grid-cols-12 shadow-md">
            <div class="col-span-6">
              <div class="m-4">
                <i class="fa fa-bars"></i>
              </div>
            </div>
            <div class="col-span-6">
              <div class="grid grid-cols-12">
                <div class="col-span-8">
                  <div
                    class="bg-gray-400 rounded-full h-12 w-12 float-right m-1"
                  >
                    <div class="text-center mt-3">
                      <i class="fa fa-user"></i>
                    </div>
                  </div>
                </div>
                <div class="col-span-3">
                  <div class="m-1">
                    <div class="font-bold">Abdul Hakim</div>
                    <small>Kepala Sekolah</small>
                  </div>
                </div>
                <div class="col-span-1">
                  <div class="m-4 cursor-pointer transition duration-300 ease-in transform hover:scale-125" @click="showSetting">
                    <i class="fa fa-ellipsis-v"></i>
                  </div>
                  <div class="bg-gray-100 absolute mt-1 w-3/12 -ml-56 shadow-md rounded" v-if="showSet">
                    <ul class="cursor-pointer">
                      <li class="py-3 px-8 border-b-2 hover:bg-gray-300">
                        <i class="fa fa-file-image mr-2"></i> Rubah Foto Profil
                      </li>
                      <li class="py-3 px-8 border-b-2 hover:bg-gray-300">
                        <i class="fa fa-lock mr-2"></i> Rubah Kata Sandi
                      </li>
                      <li class="py-3 px-8 hover:bg-gray-300">
                        <i class="fa fa-power-off mr-2"></i> Logout
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="m-3 bg-white mt-20">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            consectetur unde explicabo adipisci quam nemo qui dicta at minima
            asperiores. Nemo sint libero hic a, possimus doloribus vero quos
            rerum! Dolores veritatis eaque nesciunt maxime suscipit nam a quasi
            distinctio? Animi est possimus ad iusto quis veniam! Quasi
            architecto, et odio magni delectus aut, nisi consectetur corrupti,
            laudantium fugit molestiae. A magnam facilis quis culpa deserunt
            dolores! Nesciunt quos nam excepturi ab voluptatibus itaque, sit
            molestias voluptates consectetur nihil corporis hic. Iste, ea
            voluptate ab magni ratione impedit doloribus aperiam? Esse quisquam
            porro id voluptatibus enim eveniet laboriosam. Natus, unde optio!
            Architecto vero sunt maiores eius reiciendis amet maxime recusandae,
            in illum dolor quidem voluptatibus, quisquam ratione ea quas
            consectetur? Corporis, veniam deleniti odit perspiciatis quia enim
            praesentium, et nobis debitis numquam hic mollitia atque repellat
            minima! Ducimus, inventore? A dignissimos similique corrupti
            veritatis in? Quae molestias amet maxime libero? Tenetur reiciendis
            fuga animi non eos possimus ea, eum vero omnis laudantium eligendi,
            veritatis velit aliquam nobis quasi saepe! Necessitatibus pariatur
            sapiente dolorum sequi architecto sint molestias expedita illum
            adipisci. Sint officia temporibus, beatae officiis iure corrupti et
            rerum quia culpa laboriosam. Deserunt itaque vero dolorum excepturi
            dicta quisquam fugit corporis fugiat nemo nam eligendi odit quidem,
            maiores aut facere. Accusamus, vero. Reiciendis vel tempora
            perferendis vitae distinctio saepe dolor est, iste quod ipsam.
            Suscipit, praesentium? Repudiandae laboriosam in repellendus quas
            dolore id maiores delectus, dolorum fugit, esse deserunt ipsam.
            Saepe debitis et nesciunt molestias ipsum dicta in quam asperiores
            obcaecati placeat aspernatur iste ex, similique, a temporibus quidem
            ratione cum non modi magni! Maiores omnis voluptates rerum? Illo,
            facere. Ratione nostrum reiciendis, quaerat eaque ut exercitationem.
            Ipsam repellendus animi possimus aspernatur iure ullam error enim
            accusantium voluptates porro officiis ex nesciunt, distinctio
            repudiandae odio mollitia repellat commodi dolore. Quae? Minima sint
            quos temporibus tempora nostrum debitis officiis sapiente! Laborum
            itaque, rem non tempore voluptatum earum impedit corporis at optio
            nihil cum nam ducimus facilis quos voluptatem sed libero corrupti.
            Ut consequatur eos, dolorum accusantium inventore at hic
            voluptatibus cum saepe eaque eius dignissimos culpa soluta numquam a
            molestiae voluptas excepturi atque aperiam repellat voluptates
            explicabo quasi dolore eum! Harum! At ea iure, animi reprehenderit
            repellat alias quasi enim quam sint quisquam nostrum, fuga
            distinctio voluptatum obcaecati, eius consequuntur dicta. Ratione
            cum minima repellat expedita esse numquam velit laudantium iusto!
            Temporibus accusantium excepturi delectus aut eveniet tempora natus
            minima vel, veniam vitae consequatur sed non voluptatum commodi
            porro doloremque recusandae tempore consequuntur dolor! Suscipit
            officiis expedita sunt, accusamus voluptates atque? Laborum placeat
            perferendis, nostrum illum delectus praesentium totam, asperiores
            inventore deleniti repellat sunt, et ullam. Natus dolore quos odit
            placeat ad voluptate, dolorum ea fugit repudiandae deleniti totam
            molestias odio? Omnis, cumque. Accusantium culpa, aliquam ratione
            consequuntur eius non est! Architecto sed quia eligendi repellendus
            optio ea quaerat, distinctio ipsum maiores delectus explicabo magni
            eveniet temporibus pariatur saepe vel molestiae. Cum aut debitis
            exercitationem ipsum, sapiente repellendus nostrum perspiciatis
            ipsam. Ducimus maiores sed adipisci quos deleniti quidem asperiores
            cumque aspernatur. Rerum, accusamus. Illo veniam quibusdam porro est
            consequatur consequuntur quas? Quibusdam pariatur sequi tempore
            aspernatur blanditiis dolores esse sapiente vitae veritatis odio,
            dolor, nesciunt itaque, non doloribus? Eos quidem excepturi, optio
            reiciendis temporibus a beatae nihil itaque eum voluptatem atque.
            Fugiat molestiae totam nisi veritatis dolore nam quasi et voluptate
            repellendus reiciendis ab tempora earum autem facere sint tenetur,
            sequi officiis aut aliquid? Nisi quae adipisci dolorum delectus.
            Tempore, necessitatibus? Atque neque, impedit voluptatem amet, a
            illo eveniet commodi odit blanditiis quae expedita repellendus est
            sunt dolorum rerum cumque, deleniti autem animi? Possimus rem
            itaque, excepturi ut assumenda reiciendis ipsam! Soluta eum nam
            corrupti earum quas aliquid accusamus voluptatibus. Quas commodi
            praesentium ullam minus eveniet laborum, ipsum ipsa ratione labore
            sed, deserunt vel maxime cupiditate, dicta atque error quasi
            doloribus. Dolor accusantium maxime laboriosam numquam dolorem vitae
            odio. Delectus dolore exercitationem sapiente vel enim odio saepe,
            nulla ut doloribus voluptate provident facilis blanditiis! Adipisci
            sed, qui voluptatum voluptate vitae quod. Dolor nihil nostrum
            impedit sunt reiciendis eaque in, cupiditate provident eum
            repellendus, hic praesentium amet quo deleniti eligendi, natus
            asperiores! Veritatis sunt, perferendis tenetur suscipit vitae
            beatae quaerat quos aspernatur? Doloribus eaque pariatur
            exercitationem tempora eum veritatis molestias, ex assumenda quasi!
            Obcaecati fugiat officiis atque nostrum sed, ut esse fuga, ea
            sapiente quaerat debitis vitae autem quisquam repellendus maxime
            doloremque. Quam sequi eius molestiae dolorum eveniet vitae, placeat
            voluptatem laboriosam consequatur dolorem molestias corrupti quod,
            cupiditate id non repellat! In quae facilis eligendi nulla officiis
            dolor fuga minima ipsam rem. Porro ex eaque laudantium corrupti
            dolorum nisi commodi ratione enim quis facilis nulla reprehenderit
            ut dolor provident nobis voluptatibus repellat possimus dolorem
            nostrum asperiores eius accusantium, earum, veniam amet! Aliquid.
            Voluptas earum commodi possimus suscipit consectetur blanditiis,
            reprehenderit incidunt at molestiae ratione amet reiciendis nemo
            praesentium odio deserunt optio nam cum nobis quia. Tenetur
            doloribus eveniet totam neque optio porro! Dolore laudantium
            quibusdam numquam quia impedit ab quod labore autem eos, id
            accusantium accusamus, dicta corrupti. Blanditiis ut nostrum
            nesciunt illum ad molestias provident tempore doloribus? Corrupti
            laboriosam quaerat facere. Accusamus illo praesentium fuga beatae
            impedit laborum repudiandae officia qui magnam. Aut, perspiciatis
            similique, facilis dolorum repudiandae minima non ab, voluptatem
            expedita ducimus corporis aspernatur voluptate magnam nostrum illum
            perferendis! Necessitatibus esse quod assumenda eligendi quos
            deleniti amet aut voluptates, delectus iusto dolore atque alias?
            Magnam aliquam explicabo molestiae porro, totam dolorum unde laborum
            iste dolor ex sapiente architecto voluptas! Sapiente odit possimus
            eaque quisquam necessitatibus labore alias nemo maiores, dolor eos
            maxime eligendi dolore doloribus. Facere harum quos numquam neque id
            officiis aperiam distinctio sequi. Vero veniam sed distinctio.
            Cumque voluptatum neque pariatur, provident iusto ab. Soluta
            corporis, odit provident veniam modi eaque placeat iste sapiente.
            Quisquam, nisi? Doloribus in error nostrum explicabo eius facilis
            quis aliquid quidem blanditiis? Quibusdam nostrum praesentium
            molestiae placeat ducimus debitis blanditiis culpa aliquid officia!
            Nisi quo rerum asperiores nulla fugiat, saepe repellat enim
            voluptatum id unde doloribus eveniet ad sequi voluptate vitae autem.
            Nemo provident dolorem modi accusamus, optio iste illum voluptate
            eos ipsam facilis veniam alias culpa voluptatum, exercitationem
            soluta minus consectetur velit esse magnam facere quasi. Labore id
            ut odit atque! Cumque dolore aut consequatur tempora suscipit
            cupiditate labore? Ducimus, neque! Odit repellat voluptate velit
            ullam aut natus similique voluptatum excepturi fugit animi
            aspernatur, quam soluta recusandae suscipit ipsum labore magnam.
            Eveniet et asperiores saepe quia excepturi! Molestias, nam voluptate
            quasi numquam saepe illo officiis ad eligendi dolore nobis
            doloremque quas quidem nisi dolor adipisci sit exercitationem
            temporibus illum aperiam! Quia. Ipsa quidem, dignissimos a, iusto,
            laudantium reprehenderit exercitationem libero neque tempora nulla
            qui? Error dolorem obcaecati ipsam rerum vero dignissimos culpa
            blanditiis modi at sed! Laboriosam cum exercitationem fugit animi!
            Optio commodi distinctio perferendis eaque accusantium iusto velit
            enim, dolorem saepe fugit sed nobis aliquam amet repudiandae? Quia
            inventore, nulla, animi impedit accusamus nesciunt saepe quos
            recusandae officia facere dicta? Sit, rem dignissimos obcaecati
            ratione numquam placeat iste rerum praesentium ipsa nisi sed
            perferendis! Similique reiciendis inventore eveniet magnam provident
            sit dolorum quia placeat, quasi eum et perspiciatis beatae libero.
            Sint quis, numquam maiores cum facere saepe expedita optio
            architecto explicabo et ipsam fuga tenetur laudantium amet nam
            mollitia veniam rem dolore cupiditate modi? Quaerat rem explicabo
            ipsam fuga et! Culpa repudiandae esse quis laudantium repellendus
            animi provident reiciendis adipisci laborum placeat excepturi
            dolorem quidem facilis similique blanditiis cumque dolore beatae
            iure itaque consequuntur, pariatur, accusamus molestiae quia magni.
            Saepe? Quos quaerat qui hic, ipsum quo ratione saepe? Delectus,
            minima itaque non quae nemo, autem, voluptate corrupti eos aut
            laudantium dicta explicabo enim eum in quasi officiis dignissimos
            tempore! Provident? Pariatur, quos fuga recusandae dolorem unde
            maiores nesciunt qui labore cum natus quibusdam dolores sed
            repudiandae velit ipsum commodi laudantium doloremque reprehenderit.
            Reprehenderit soluta unde vitae magni officia libero neque.
            Voluptates similique, ipsum vel corrupti asperiores soluta
            temporibus. Recusandae nobis nisi quos nostrum deserunt rem
            architecto voluptatibus autem laborum. Ut maiores eos eius quasi
            dignissimos minima sed saepe commodi incidunt. Consequuntur
            repellendus quo fuga culpa cumque velit voluptatem autem, officia,
            corporis, vel deleniti necessitatibus corrupti incidunt eos
            voluptatibus eveniet quam veritatis tempore ipsa mollitia sapiente
            fugit. Qui ipsam dolore magnam. Odit reprehenderit, quaerat sint ea
            et voluptas hic animi tenetur nam placeat molestiae cumque dolorum?
            Fuga harum corporis blanditiis, ab sapiente architecto illo ipsa est
            ipsam suscipit magni dolore repellat! Atque doloribus tenetur id
            maiores, porro qui cumque nulla voluptate ex beatae error laudantium
            doloremque saepe aperiam, laboriosam rerum! Eveniet, maxime.
            Aperiam, nesciunt. Consequatur atque eos quo deleniti id repellat.
            Ipsa qui quod totam accusantium deleniti iusto asperiores dolor quae
            facere consectetur, magnam numquam voluptas labore fugit, ducimus
            aliquam magni quos tempore blanditiis, expedita vero velit sed
            doloremque! Aliquam, ex. Odio ex dignissimos, ipsam sapiente sit
            quidem minus excepturi libero incidunt possimus consectetur
            voluptates fugiat facere totam, nulla sint reiciendis modi. Tempore
            suscipit itaque dolorem neque facere ducimus facilis ipsam! Id
            architecto cumque laboriosam autem laudantium ducimus temporibus
            iure. Incidunt odit ipsam ex laudantium accusamus ad, praesentium
            architecto cupiditate voluptate quam officia harum? Similique unde
            veniam nisi. Molestiae, labore distinctio.
            <router-view></router-view>
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
      menuName: '',
      showSet: false,
      menu: [
        {
          name: 'Sekolah',
          icon: 'fa fa-building',
          children: [
            {
              name: 'Data Sekolah',
            },
            {
              name: 'Data Ruangan'
            }
          ]
        },
        {
          name: 'Sesi Akedemik',
          icon: 'fa fa-calendar-alt',
          children: [
            {
              name: 'Tahun Ajaran'
            },
            {
              name: 'Semester'
            }
          ]
        },
        {
          name: 'Pengaturan Kelas',
          icon: 'fa fa-door-open',
          children: [
            {
              name: 'Daftar Jurusan'
            },
            {
              name: 'Daftar Tingkatan'
            },
            {
              name: 'Daftar Kelas'
            },
            {
              name: 'Daftar Rombel'
            },
            {
              name: 'Jadwal Pelajaran'
            }
          ]
        },
        {
          name: 'Staff & Guru',
          icon: 'fa fa-user-tie',
          children: [
            {
              name: 'Daftar Guru'
            },
            {
              name: 'Daftar Staff'
            }
          ]
        },
        {
          name: 'Siswa',
          icon: 'fa fa-user',
          children: [
            {
              name: 'Daftar Siswa'
            },
          ]
        },
        {
          name: 'LMS',
          icon: 'fa fa-clipboard',
          children: [
            {
              name: 'E-Learning'
            },
            {
              name: 'E-Tugas'
            }
          ]
        },
        {
          name: 'Pengaturan',
          icon: 'fa fa-cogs',
          children: [
            {
              name: 'Profil Pengguna'
            },
            {
              name: 'Akun Staff'
            },
            {
              name: 'Akun Guru'
            },
            {
              name: 'Akun Siswa'
            },
            {
              name: 'Akun Orang Tua'
            }
          ]
        }
      ]
    };
  },
  methods: {
    dropdown(value) {
      this.menuName = value
    },
    notDropdown () {
      this.menuName = ''
    },
    showSetting () {
      if (this.showSet === false) {
        this.showSet = true
      } else {
        this.showSet = false
      }
    }
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
