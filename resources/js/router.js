import {createRouter, createWebHistory} from "vue-router";

// import PostComponent from "./components/PostComponent.vue";
// import TagComponent from "./components/TagComponent.vue";


const routes = [
    {
        path: '/people', component: () =>
            import('./components/Person/Index.vue'),
        name: 'person.index',
    }


]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router



