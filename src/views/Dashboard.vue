<template>
  <div>
    <div>
      <vs-navbar square text-white color="#2f3866" fixed v-model="active2">
        <template #right>
          <div style="cursor: pointer" @click="active2 = !active2">
            <b-row>
              <b-col md="4">
                <vs-avatar circle size="40">
                  <img src="https://picsum.photos/id/1/200/300" alt="" />
                </vs-avatar>
              </b-col>
              <b-col>
                Abdul Hakim
                <div>
                  <small>1234567890</small>
                </div>
              </b-col>
            </b-row>
          </div>
        </template>
      </vs-navbar>
    </div>
    <div class="hidden">
      <vs-sidebar
        square
        background="#2f3866"
        textWhite
        reduce
        v-model="active"
        open
      >
        <template #logo>
          <!-- ...img logo -->
        </template>
        <vs-sidebar-item id="home" to="/">
          <template #icon>
            <i class="fa fa-home"></i>
          </template>
          <div class="text-danger font-weight-bold h5">
            Home
          </div>
        </vs-sidebar-item>
        <vs-sidebar-item id="market" to="/profil">
          <template #icon>
            <i class="fa fa-user"></i>
          </template>
          <div class="text-danger font-weight-bold h5">
            Profil Guru
          </div>
        </vs-sidebar-item>
        <vs-sidebar-item id="tugas" to="/tugas">
          <template #icon>
            <i class="fa fa-book"></i>
          </template>
          <div class="text-danger font-weight-bold h5">
            Tugas
          </div>
        </vs-sidebar-item>
        <vs-sidebar-item id="elearning" to="/e-learning">
          <template #icon>
            <i class="fa fa-graduation-cap"></i>
          </template>
          <div class="text-danger font-weight-bold h5">
            E-Learning
          </div>
        </vs-sidebar-item>
        <template #footer>
          <vs-tooltip right>
            <vs-avatar badge-color="danger" badge-position="top-right">
              <i class="fa fa-bell text-dark"></i>
              <template #badge>
                28
              </template>
            </vs-avatar>
            <template #tooltip>
              Notifikasi
            </template>
          </vs-tooltip>
        </template>
      </vs-sidebar>
      <vs-dialog prevent-close v-model="active2">
        <template #header>
          <h5>Menu Options</h5>
        </template>

        <template #footer>
          <div class="footer-dialog">
            <vs-button block to="/profil">
              <i class="fa fa-user mx-2"></i> Profil Guru
            </vs-button>
            <vs-button
              color="rgb(234,66,44)"
              gradient
              block
              @click="openLoading"
            >
              <i class="fa fa-power-off mx-2"></i> Log Out
            </vs-button>
          </div>
        </template>
      </vs-dialog>
    </div>
    <div style="margin-left: 4rem; margin-top: 4rem; margin-right: 0.5rem;">
      <router-view />
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
      active2: false,
      input1: "",
      input2: "",
      checkbox1: false,
    };
  },
  methods: {
    openLoading() {
      const loading = this.$vs.loading({
        text: "Loading...",
        opacity: 1,
        type: "corners"
      });
      localStorage.clear();
      this.$router.push({ name: "Login" });
      this.active2 = false;
      loading.close();
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
