/* eslint-disable */
// eslint-disable-next-line
// eslint-disable vue/no-unused-vars
// eslint-disable-line no-unused-vars

import axios from 'axios'

export const user = {
    namespaced: true,
    state: {
        user: [],
        isLoading: false,
        total_page: 0
    },
    mutations: {
        inputJurusan (state, data) {
            state.user = data
        },
        inputLoading (state, value) {
            state.isLoading = value
        },
        inputTotalPage (state, value) {
            state.total_page = value
        },
    },
    actions: {
        getDataUser ({ commit }, params) {
            commit('inputLoading', true)
            axios.get('/api/auth/user', { params: params }).then(response => {
                console.log(response.data.data)
                setTimeout(function () {
                    commit('inputLoading', false)
                    commit('inputTotalPage', response.data.data.count)
                    commit('inputJurusan', response.data.data.rows)
                }, 2000)
            }).catch(error => {
                commit('inputLoading', false)
                console.log(error)
            })
        },
    }
}

export default user