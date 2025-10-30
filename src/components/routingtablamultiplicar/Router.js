import { createWebHistory, createRouter } from "vue-router";
import TablaMultiplicar from "./TablaMultiplicar.vue";

const myRoutes = [
    {path: "/tablamultiplicar/:numero?", component: TablaMultiplicar},
    ]

const router = createRouter ({
    history: createWebHistory(),
    routes: myRoutes
})

export default router