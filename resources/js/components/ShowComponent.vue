<template>

    <tr :class="this.$parent.isEdit(person.id) ? 'd-none' : ''">
        <th scope="row">{{ person.id }}</th>
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.job }}</td>
        <td><a href="#"
               @click.prevent="changeEditePersonId(person.id, person.name,  person.age, person.job)"
               class="btn btn-success">Edit</a></td>
        <td><a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-danger">Delete</a></td>
    </tr>
</template>
<script>
export default {
    name: "ShowComponent",
    components: {},
    data() {
        return {}
    },
    props: [
        'person'
    ],

    mounted() {

    },

    methods: {
        deletePerson(id) {
            axios.delete(`/api/people/${id}`,)
                .then(res => {
                    this.$parent.getPeople();
                })

        },

        changeEditePersonId(id, name, age, job) {
            let editName = `edit_${id}`;
            let fullEditName = this.$parent.$refs[editName][0];
            this.$parent.editPersonId = id;
            fullEditName.name = name;
            fullEditName.age = age;
            fullEditName.job = job;
        },

    }
}
</script>

<style scoped>

</style>
