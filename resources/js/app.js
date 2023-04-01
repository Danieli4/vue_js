import { createApp } from 'vue';
import Index from "./components/Index.vue";
import store from "./store";
import router from "./router";


const index = createApp(Index);
index.use(store);
index.use(router);
index.mount('#app');

