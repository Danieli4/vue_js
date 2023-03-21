<template>
    <div class="w-25">
        <div class="mb-3">
            <input type="text" class="form-control" v-model="name" id="name" placeholder="name">
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" v-model="age" id="age" placeholder="age">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" v-model="job" id="age" placeholder="job">
        </div>
        <div class="mb-3">
            <input  @click.prevent="addPersons" class="btn btn-primary" value="Добавить">
        </div>
    </div>
    <SomeComponent :obj="obj"></SomeComponent>
</template>
<script>

import SomeComponent from "./SomeComponent.vue";

export default {
    name: "CreateComponent",
    data() {
        return {
            name: null,
            age: null,
            job: null,
            obj: {
                color: 'yellow',
                number: 2,
                isPublished: true,

            },

        }
    },

    mounted() {

    },

    methods: {
        addPersons() {
            axios.post('/api/people', {name: this.name, age: this.age, job: this.job})
                .then(res =>{
                    this.name =null
                    this.age =null
                    this.job =null
                    //console.log(res);
                })

            // axios.get('/persons')
            //     .then(res => {
            //         this.persons = res.data;
            //         console.log(res);
            //     })
            //     .catch()
            //     .finally();
        },
    },
    components:{
      SomeComponent
    }
}
</script>

<style scoped>

</style>
