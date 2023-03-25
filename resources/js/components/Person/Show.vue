<template>
    <div>
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
        <router-link  :to="{name:'person.edit'}">Edit</router-link>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "Show",

    data() {
        return {
            person: {}
        }
    },
    mounted() {
        this.getPersonShow();
        },

    methods: {
        getPersonShow() {
            axios.get('/api/people/' + this.$route.params.id)
                .then(res => this.person = res.data)
        },
    }
}
</script>

<style scoped>

</style>
