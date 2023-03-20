<template>
    <div>
        <CreateComponent></CreateComponent>
        <IndexComponent></IndexComponent>
    </div>
</template>
<script>
import CreateComponent from "./CreateComponent.vue";
import IndexComponent from "./IndexComponent.vue";

export default {
    name: "PostComponent",
    components: {IndexComponent, CreateComponent},
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
