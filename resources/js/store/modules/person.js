import axios from "axios";
import router from "../../router";
import store from "../index";

const state = {
    person: {
        name: "null",
        age: 45,
        job: "null",
    },
    people: null,
}

 const getters = {
    person: (state) =>{
        return state.person
    },
    people: (state) => {
        return state.people
    },
    isDisabled: (state) => {
        return state.person.name && state.person.age && state.person.job;
    },
}

const mutations = {
    setPerson(state, person) {
        state.person = person
    },
    setPeople(state, people) {
        state.people = people
    },
}

const actions = {
    async getPerson({commit}, id) {
        axios.get(`/api/people/${id}`)
            .then(res => {
                commit('setPerson', res.data.data)
            })
    },
    async getPeople({commit}) {
        axios.get('/api/people')
            .then(res => {
                commit('setPeople', res.data.data);
            })
    },
    async deletePerson({dispatch}, id) {
        axios.delete(`/api/people/${id}`)
            .then(res => {
                dispatch('getPeople');
                return res.data
            })
    },
    async updatePerson({}, data) {
        axios.patch(`/api/people/${data.id}`, {name: data.name, age: data.age, job: data.job})
            .then(res => {
                router.push({name: "person.show", params: {id: data.id}})
            })

    },
    async storePeople({}, data) {
        axios.post('/api/people', {name: data.name, age: data.age, job: data.job})
            .then(res => {
                router.push({name: 'person.index'})
            });
    },
}


export default {
    state, mutations, getters, actions
}
