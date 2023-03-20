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
            <tr v-for="person in people">
                <th scope="row">{{person.id}}</th>
                <td>{{person.name}}</td>
                <td>{{person.age}}</td>
                <td>{{person.job}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>


export default {
    name: "IndexComponent",
    data() {
        return {
            people: null
        }
    },

    mounted() {
        this.getPeople();

    },

    methods: {
        getPeople() {
            axios.get('/api/people')
                .then(res => {
                    this.people = res.data;
                });
        },

        addPersons() {
            axios.post('/api/people', {name: this.name, age: this.age, job: this.job})
                .then(res =>{
                    this.name =null,
                    this.age =null,
                    this.job =null,
                    console.log(res);
                })

            // axios.get('/persons')
            //     .then(res => {
            //         this.persons = res.data;
            //         console.log(res);
            //     })
            //     .catch()
            //     .finally();
        },

        //computed: {},


    }
}
</script>

<style scoped>

</style>
