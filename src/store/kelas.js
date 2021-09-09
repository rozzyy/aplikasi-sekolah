/* eslint-disable */
// eslint-disable-next-line
// eslint-disable vue/no-unused-vars
// eslint-disable-line no-unused-vars

import axios from 'axios'

export const kelas = {
    namespaced: true,
    state: {
        kelas: [],
        kelasOptions: [],
        isLoading: false,
        total_page: 0
    },
    mutations: {
        inputKelas (state, data) {
            state.kelas = data
        },
        inputKelasOptions (state, data) {
            state.kelasOptions = data
        },
        inputLoading (state, value) {
            state.isLoading = value
        },
        inputTotalPage (state, value) {
            state.total_page = value
        }
    },
    actions: {
        getDataKelas ({ commit }, params) {
            commit('inputLoading', true)
            axios.get('/api/data-induk/kelas', { params: params }).then(response => {
                setTimeout(function () {
                    commit('inputLoading', false)
                    commit('inputTotalPage', response.data.data.count)
                    commit('inputKelas', response.data.data.rows)
                }, 2000)
            }).catch(error => {
                commit('inputLoading', false)
                console.log(error)
            })
        },
        async getKelasOptions ({ commit }) {
            try {
                let response = await axios.get('/api/data-induk/kelas-options')
                commit("inputKelasOptions", response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default kelas