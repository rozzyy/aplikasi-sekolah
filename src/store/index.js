import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOffice: false
  },
  mutations: {
    testOffice (state, value) {
      state.isOffice = value
    }
  },
  actions: {
    setOffice ({ commit }, value) {
      console.log(value)
      commit('testOffice', value)
    }
  },
  modules: {
  }
})
