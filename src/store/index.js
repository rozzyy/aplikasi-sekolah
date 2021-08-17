import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOffice: false,
    dataGuru: []
  },
  mutations: {
    testOffice (state, value) {
      state.isOffice = value
    },
    inputDataGuru (state, data) {
      state.dataGuru = data
    }
  },
  actions: {
    setOffice ({ commit }, value) {
      console.log(value)
      commit('testOffice', value)
    },
    setDataGuru ({ commit }) {
      axios.get('/api/profil/guru').then(response => {
        setTimeout(function () {
          commit('inputDataGuru', response.data.data)
        }, 5000)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  modules: {
  }
})
