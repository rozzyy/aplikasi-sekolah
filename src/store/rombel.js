/* eslint-disable */
// eslint-disable-next-line
// eslint-disable vue/no-unused-vars
// eslint-disable-line no-unused-vars

import axios from 'axios'

export const rombel = {
    namespaced: true,
    state: {
        rombel: [],
        isLoading: false,
        total_page: 0
    },
    mutations: {
        inputRombel (state, data) {
            state.rombel = data
        },
        inputLoading (state, value) {
            state.isLoading = value
        },
        inputTotalPage (state, value) {
            state.total_page = value
        }
    },
    actions: {
        getRombel({ commit }, params) {
            commit('inputLoading', true)
            axios.get('/api/data-induk/rombel/search', { params: params }).then(response => {
                setTimeout(function () {
                    commit('inputLoading', false)
                    commit('inputTotalPage', response.data.data.count)
                    commit('inputRombel', response.data.data.rows)
                }, 2000)
            }).catch(error => {
                commit('inputLoading', false)
                console.log(error)
            })
        }
    }
}

export default rombel