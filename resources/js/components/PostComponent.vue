<template>
    <div>
        <SinglePostComponent></SinglePostComponent>
        <CreateComponent></CreateComponent>
    </div>
</template>
<script>
import SinglePostComponent from "./SinglePostComponent.vue";
import CreateComponent from "./CreateComponent.vue";

export default {
    name: "PostComponent",
    components: {CreateComponent, SinglePostComponent},
    data() {
        return {
            persons: null,


        }
    },

    mounted() {

    },

    methods: {

    }
}
</script>

<style scoped>

</style>
