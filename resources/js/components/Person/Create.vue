<template>
    <div class="w-25">
        <div class="mb-3">
            <input type="text" v-model="person.name" placeholder="name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="number" v-model="person.age" placeholder="age" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="person.job" placeholder="job" class="form-control">
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled" @click.prevent="$store.dispatch('storePeople', {name: person.name, age: person.age, job: person.job})" type="submit" value="Add" class="btn btn-primary">

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import store from "../../store";
import {mapGetters} from "vuex";

export default {
    name: "Create",
    data() {
        return {
            name: ''
        }}
    ,

    mounted() {
        this.$store.commit('setPerson', {name: '', age: null, job: null});
    },

    methods: {

    },
    computed: {
        ...mapGetters(
            {
                person: 'person',
                people: 'people',
                isDisabled: 'isDisabled',

            }),
    }
}
</script>

<style scoped>

</style>
