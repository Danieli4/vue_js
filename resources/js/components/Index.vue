<template>
    <div>
        <router-link to="/posts" class="link-dark"> Posts </router-link>
        <router-link to="/tags"> Tags </router-link>
        111
        <router-view>

        </router-view>
    </div>

</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
