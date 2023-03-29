import { createApp } from 'vue';
import Index from "./components/Index.vue";
import store from "./store";


import router from "./router";

const index = createApp({});
index.component('index', Index);
index.use(router, store).mount('#app')

