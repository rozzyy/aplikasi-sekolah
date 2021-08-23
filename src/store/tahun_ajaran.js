/* eslint-disable */
// eslint-disable-next-line
// eslint-disable vue/no-unused-vars
// eslint-disable-line no-unused-vars

import axios from 'axios'

export const tahun_ajaran = {
    namespaced: true,
    state: {
        tahun_ajaran: [],
        isLoading: false,
        total_page: 0
    },
    mutations: {
        inputTahunAjaran (state, data) {
            state.tahun_ajaran = data
        },
        inputLoading (state, value) {
            state.isLoading = value
        },
        inputTotalPage (state, value) {
            state.total_page = value
        }
    },
    actions: {
        getTahunAjaran({ commit }, params) {
            commit('inputLoading', true)
            axios.get('/api/data-induk/tahun-ajaran', { params: params }).then(response => {
                setTimeout(function () {
                    commit('inputLoading', false)
                    commit('inputTotalPage', response.data.data.count)
                    commit('inputTahunAjaran', response.data.data.rows)
                }, 2000)
            }).catch(error => {
                commit('inputLoading', false)
                console.log(error)
            })
        }
    }
}

export default tahun_ajaran