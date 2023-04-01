<template>
    <div v-if="person">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">{{ person.id }}</th>
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
                <td>{{ person.job }}</td>
                <td>
                </td>
            </tr>

            </tbody>
        </table>
        <router-link :to="{name:'person.edit', params: {id: this.$route.params.id}}">Edit</router-link>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import store from "../../store";

export default {
    computed: {
        person(){
            return store.getters.person;

        }
    },

    mounted() {
        store.dispatch('getPerson', this.$route.params.id);
        console.log(store.getters.person);
    }
}


</script>

<style scoped>

</style>
