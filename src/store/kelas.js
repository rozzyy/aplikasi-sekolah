/* eslint-disable */
// eslint-disable-next-line
// eslint-disable vue/no-unused-vars
// eslint-disable-line no-unused-vars

import axios from 'axios'

export const kelas = {
    namespaced: true,
    state: {
        kelas: [],
        isLoading: false,
        total_page: 0
    },
    mutations: {
        inputKelas (state, data) {
            state.kelas = data
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
        }
    }
}

export default kelas