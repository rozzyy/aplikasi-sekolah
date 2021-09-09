import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Jurusan from './jurusan'
import TahunAjaran from './tahun_ajaran'
import Kelas from './kelas'
import Tingkatan from './tingkatan'
import User from './user'
import Semester from './semester'
import Rombel from './rombel'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOffice: false,
    dataGuru: [],
    dataStaff: [],
    dataSiswa: [],
    isLoading: false,
    total_page: 0
  },
  mutations: {
    testOffice (state, value) {
      state.isOffice = value
    },
    inputDataGuru (state, data) {
      state.dataGuru = data
    },
    inputDataStaff (state, data) {
      state.dataStaff = data
    },
    inputDataSiswa (state, data) {
      state.dataSiswa = data
    },
    loading (state, value) {
      state.isLoading = value
    },
    inputTotal (state, value) {
      state.total_page = value
    }
  },
  actions: {
    setOffice ({ commit }, value) {
      console.log(value)
      commit('testOffice', value)
    },
    setDataGuru ({ commit }, params) {
      commit('loading', true)
      axios.get('/api/profil/guru', { params: params }).then(response => {
        setTimeout(function () {
          commit('loading', false)
          commit('inputTotal', response.data.data.count)
          commit('inputDataGuru', response.data.data.rows)
        }, 2000)
      }).catch(error => {
        commit('loading', false)
        console.log(error)
      })
    },
    setDataStaff ({ commit }, params) {
      commit('loading', true)
      axios.get('/api/profil/staff', { params: params }).then(response => {
        setTimeout(function () {
          commit('loading', false)
          commit('inputTotal', response.data.data.count)
          commit('inputDataStaff', response.data.data.rows)
        }, 2000)
      }).catch(error => {
        commit('loading', false)
        console.log(error)
      })
    },
    setDataSiswa ({ commit }, params) {
      commit('loading', true)
      axios.get('/api/profil/siswa', { params: params }).then(response => {
        setTimeout(function () {
          commit('loading', false)
          commit('inputTotal', response.data.data.count)
          commit('inputDataSiswa', response.data.data.rows)
        }, 2000)
      }).catch(error => {
        commit('loading', false)
        console.log(error)
      })
    }
  },
  modules: {
    Jurusan,
    TahunAjaran,
    Kelas,
    Tingkatan,
    User,
    Semester,
    Rombel
  }
})
