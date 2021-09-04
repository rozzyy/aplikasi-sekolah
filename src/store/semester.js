/* eslint-disable */
// eslint-disable-next-line
// eslint-disable vue/no-unused-vars
// eslint-disable-line no-unused-vars

import axios from 'axios'

export const semester = {
    namespaced: true,
    state: {
        semester: [],
        isLoading: false,
        total_page: 0
    },
    mutations: {
        inputSemester (state, data) {
            state.semester = data
        },
        inputLoading (state, value) {
            state.isLoading = value
        },
        inputTotalPage (state, value) {
            state.total_page = value
        }
    },
    actions: {
        getSemester({ commit }, params) {
            commit('inputLoading', true)
            axios.get('/api/data-induk/semester', { params: params }).then(response => {
                setTimeout(function () {
                    commit('inputLoading', false)
                    commit('inputTotalPage', response.data.data.count)
                    console.log(response.data.data.rows)
                    commit('inputSemester', response.data.data.rows)
                }, 2000)
            }).catch(error => {
                commit('inputLoading', false)
                console.log(error)
            })
        }
    }
}

export default semester