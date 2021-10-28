import { createWebHashHistory, createRouter } from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Service from "./components/Service.vue"

const routes = [
    {
        name:'HelloWorld',
        path:'/',
        component:HelloWorld,
    },
    {
        name:'About',
        path:'/about',
        component:About,
    },
    {
        name:'Contact',
        path:'/contact',
        component:Contact,
    },
    {
        name:'Service',
        path:'/service',
        component:Service,
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;