/* eslint-disable */
// eslint-disable-next-line
// eslint-disable vue/no-unused-vars
// eslint-disable-line no-unused-vars

import axios from 'axios'

export const jurusan = {
    namespaced: true,
    state: {
        tingkatan: [],
        tingkatanOptions: [],
        isLoading: false,
        total_page: 0
    },
    mutations: {
        inputTingkatan (state, data) {
            state.tingkatan = data
        },
        inputLoading (state, value) {
            state.isLoading = value
        },
        inputTotalPage (state, value) {
            state.total_page = value
        },
        inputOptionTingkatan (state, data) {
            state.tingkatanOptions = data
        }
    },
    actions: {
        getDataTingkatan ({ commit }, params) {
            commit('inputLoading', true)
            axios.get('/api/data-induk/tingkatan', { params: params }).then(response => {
                setTimeout(function () {
                    commit('inputLoading', false)
                    console.log(response)
                    commit('inputTotalPage', response.data.data.count)
                    commit('inputTingkatan', response.data.data.rows)
                }, 2000)
            }).catch(error => {
                commit('inputLoading', false)
                console.log(error)
            })
        },
        getTingkatan ({ commit }) {
            axios.get('/api/data-induk/tingkatan-options').then(response => {
                commit('inputOptionTingkatan', response.data.data)
            }).catch(error => {
                console.log(error)
            })
        }
    }
}

export default jurusan