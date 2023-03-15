<template>
    <div>
        <SinglePostComponent></SinglePostComponent>
        <div> Name: {{name}}</div>
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



    components:{
        SinglePostComponent,

    }
}
</script>

<style scoped>

</style>
