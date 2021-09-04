/* eslint-disable */
// eslint-disable-next-line
// eslint-disable vue/no-unused-vars
// eslint-disable-line no-unused-vars

import axios from 'axios'

export const jurusan = {
    namespaced: true,
    state: {
        jurusan: [],
        jurusanOptions: [],
        isLoading: false,
        total_page: 0
    },
    mutations: {
        inputJurusan (state, data) {
            state.jurusan = data
        },
        inputLoading (state, value) {
            state.isLoading = value
        },
        inputTotalPage (state, value) {
            state.total_page = value
        },
        inputOptionJurusan (state, data) {
            state.jurusanOptions = data
        }
    },
    actions: {
        getDataJurusan ({ commit }, params) {
            commit('inputLoading', true)
            axios.get('/api/data-induk/jurusan', { params: params }).then(response => {
                setTimeout(function () {
                    commit('inputLoading', false)
                    console.log(response)
                    commit('inputTotalPage', response.data.data.count)
                    commit('inputJurusan', response.data.data.rows)
                }, 2000)
            }).catch(error => {
                commit('inputLoading', false)
                console.log(error)
            })
        },
        getJurusan ({ commit }) {
            axios.get('/api/data-induk/jurusan-options').then(response => {
                console.log(response.data.data)
                commit('inputOptionJurusan', response.data.data)
            }).catch(error => {
                console.log(error)
            })
        }
    }
}

export default jurusan