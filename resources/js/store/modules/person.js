import axios from "axios";

const state = {
    person: null
}

const getters = {
    person: (state) => state.person

}

const mutations = {
    setPerson(state, person) {
        state.person = person
    },
}

const actions = {
    async getPerson({commit}, id) {
        axios.get(`/api/people/${id}`)
            .then(res => {
                commit('setPerson', res.data.data)
            })
    },
}


export default {
    state, mutations, getters, actions
}
