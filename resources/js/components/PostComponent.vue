<template>
    <div>
        <SinglePostComponent></SinglePostComponent>
        <div> Name: {{name}}</div>
        <div> Job: {{vasyaJob}}</div>
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
            name: 'Vasia',
            age: 20,
            boolean: false,
            someNull: null,
            arr:[
                [

                ]
            ],
            someObj:{
                personName: 'Ivan'
            }
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
            return this.name + ' worked in bakery'
        },
    },


    components:{
        SinglePostComponent,

    }
}
</script>

<style scoped>

</style>
