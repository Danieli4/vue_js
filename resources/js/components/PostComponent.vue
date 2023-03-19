<template>
    <div>
        <SinglePostComponent></SinglePostComponent>
        <!--        <div> Name: {{name}}</div>-->
        <!--        <div> Job: {{vasyaJob}}</div>-->
        <!--        <div>-->
        <!--            {{persons}}-->
        <!--        </div>-->
        <div >
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Job</th>
                </tr>
                </thead>
                <tbody v-for="person in persons">
                <tr  v-if="person.age > 0">
                    <th scope="row">{{person.id}}</th>
                    <td>{{person.name}}</td>
                    <td>{{person.age}}</td>
                    <td> {{person.job}}</td>
                </tr>
                </tbody>
            </table>
            <!--            <div class="div"> {{person.name}}</div>-->
            <!--            <div class="div"> {{person.age}}</div>-->
            <!--            <div class="div"> {{person.job}}</div>-->

        </div>

    </div>
</template>
<script>
import SinglePostComponent from "./SinglePostComponent.vue";

export default {
    name: "PostComponent",
    components: {SinglePostComponent},
    data() {
        return {
            persons: null,


        }
    },

    mounted() {
        this.getPersons();
    },

    methods: {
        getPersons() {
            axios.get('/persons')
                .then(res => {
                    this.persons = res.data;
                    console.log(res);
                })
                .catch()
                .finally();
        },

        //computed: {},



    }
}
</script>

<style scoped>

</style>
