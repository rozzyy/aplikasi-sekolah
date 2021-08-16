<template>
  <div>
    <div class="bg-white rounded-lg shadow-md p-5">
      <div class="flex justify-center p-5">
        <div class="overflow-hidden h-48 w-48 rounded-full bg-gray-100">
          <div
            class="rounded-full cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-125"
          >
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              class="h-48 w-48"
              alt="foto"
            />
          </div>
        </div>
      </div>
      <h1 class="font-bold m-4">
        Profil Sekolah
      </h1>
      <div class="m-4 grid grid-cols-12 gap-4">
        <!-- first col -->
        <div class="col-span-6">
          <div class="my-3">
            <label for="jenjang">Jenjang</label>
            <div class="my-2">
              <input type="text" class="border-b-2 w-full" placeholder="SMK" />
            </div>
          </div>
          <div class="my-3">
            <label for="jenjang">No. Telepon Sekolah</label>
            <div class="my-2">
              <input type="text" class="border-b-2 w-full" placeholder="SMK" />
            </div>
          </div>
          <div class="my-3">
            <label for="jenjang">Email Sekolah</label>
            <div class="my-2">
              <input type="text" class="border-b-2 w-full" placeholder="SMK" />
            </div>
          </div>
        </div>
        <!-- end of first col -->

        <!-- second col -->
        <div class="col-span-6">
          <div class="my-3">
            <label for="jenjang">Nama Sekolah</label>
            <div class="my-2">
              <input
                type="text"
                class="border-b-2 w-full"
                placeholder="SMK MUSDA PERBAUNGAN"
              />
            </div>
          </div>
          <div class="my-3">
            <label for="jenjang">Web Sekolah</label>
            <div class="my-2">
              <input
                type="text"
                class="border-b-2 w-full"
                placeholder="SMK MUSDA PERBAUNGAN"
              />
            </div>
          </div>
          <div class="my-3">
            <label for="jenjang">Tanggal Berdiri</label>
            <div class="my-2">
              <input
                type="text"
                class="border-b-2 w-full"
                placeholder="SMK MUSDA PERBAUNGAN"
              />
            </div>
          </div>
        </div>
        <!-- end of second col -->
      </div>
      <div class="m-4">
        <div class="my-2">
          <label for="alamat">Alamat</label>
          <div class="my-2">
            <textarea class="border-b-2 w-full" placeholder="Alamat...">
            </textarea>
          </div>
        </div>
      </div>
      <div class="mx-4 grid grid-cols-12 gap-4">
        <!-- third col -->
        <div class="col-span-6">
          <div class="my-3">
            <label for="jenjang">Provinsi</label>
            <div class="my-2">
              <input
                type="text"
                class="border-b-2 w-full"
                placeholder="SMK MUSDA PERBAUNGAN"
              />
            </div>
          </div>
          <div class="my-3">
            <label for="jenjang">Kecamatan</label>
            <div class="my-2">
              <input
                type="text"
                class="border-b-2 w-full"
                placeholder="SMK MUSDA PERBAUNGAN"
              />
            </div>
          </div>
          <div class="my-3">
            <label for="jenjang">Dusun</label>
            <div class="my-2">
              <input
                type="text"
                class="border-b-2 w-full"
                placeholder="SMK MUSDA PERBAUNGAN"
              />
            </div>
          </div>
          <div class="my-3">
            <label for="jenjang">Akreditasi</label>
            <div class="my-2">
              <input
                type="text"
                class="border-b-2 w-full"
                placeholder="SMK MUSDA PERBAUNGAN"
              />
            </div>
          </div>
        </div>
        <!-- end of third col -->

        <!-- fourth col -->
        <div class="col-span-6">
          <div class="my-3">
            <label for="jenjang">Kabupaten/Kota</label>
            <div class="my-2">
              <input
                type="text"
                class="border-b-2 w-full"
                placeholder="SMK MUSDA PERBAUNGAN"
              />
            </div>
          </div>
          <div class="my-3">
            <label for="jenjang">Kelurahan</label>
            <div class="my-2">
              <input
                type="text"
                class="border-b-2 w-full"
                placeholder="SMK MUSDA PERBAUNGAN"
              />
            </div>
          </div>
          <div class="my-3">
            <label for="jenjang">RT/RW</label>
            <div class="my-2">
              <input
                type="text"
                class="border-b-2 w-full"
                placeholder="SMK MUSDA PERBAUNGAN"
              />
            </div>
          </div>
          <div class="my-3">
            <label for="jenjang">Kurikulum</label>
            <div class="my-2">
              <input
                type="text"
                class="border-b-2 w-full"
                placeholder="SMK MUSDA PERBAUNGAN"
              />
            </div>
          </div>
        </div>
        <!-- end of fourth col -->
      </div>
    </div>
  </div>
</template>
