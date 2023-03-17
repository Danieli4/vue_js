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
                <tbody v-for="person in personAgeMoreTwenty">
                <tr  v-if="person.age > 20">
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
        <button @click="sayHello">Hello</button>
        <button @click="sayHi">Hi</button>
    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent.vue";
export default {

    name: "PostComponent",

    data() {
        return {
            persons:[
                {
                    id: 1,
                    name: 'Vasya',
                    age: 20,
                    job: 'coach',

                },

                {
                    id: 2,
                    name: 'Elena',
                    age: 28,
                    job: 'teacher',

                },

                {
                    id: 3,
                    name: 'Petya',
                    age: 18,
                    job: 'driver',

                },

                {
                    id: 4,
                    name: 'Ksu',
                    age: 22,
                    job: 'Traveler',

                },

                {
                    id: 5,
                    name: 'Olya',
                    age: 28,
                    job: 'Teacher',

                },
            ]
        }
    },

    methods: {
        sayHello() {
            console.log('Privet Mir');
        },
        sayHi() {
            console.log('Hi');
        },
    },

    computed: {
        vasyaJob() {
            return this.name     + ' worked in bakery'
        },

        personAgeMoreTwenty() {
            return this.persons.filter(function (person) {
                return person.age > 20;
            });
        },
    },


    components:{
        SinglePostComponent,

    }
}
</script>

<style scoped>

</style>
