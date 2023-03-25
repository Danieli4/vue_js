<template>
    <div>
        <router-link :to="{name: 'person.index'}" class="m-lg-3 link-primary"> People  </router-link>
        <router-link :to="{name: 'person.create'}" class="m-lg-3 link-primary"> Add  </router-link>
        <router-view>

        </router-view>
    </div>

</template>

<script>
import axios from 'axios';
export default {
    name: "Index",

}
</script>

<style scoped>

</style>
