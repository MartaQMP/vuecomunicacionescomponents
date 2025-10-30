import { createWebHistory, createRouter } from "vue-router";
import PadreDeporte from "./components/deportes/PadreDeporte.vue";
import ComicsComponent from "./components/comics/ComicsComponent.vue";
import NumerosPadre from "./components/numeros/NumerosPadre.vue";
import NumeroDoble from "./components/NumeroDoble.vue";

const myRoutes = [
    {path: "/", component: PadreDeporte},
    {path: "/comics/", component: ComicsComponent},
    {path: "/numeros", component: NumerosPadre},
    {path: "/numerodoble", component: NumeroDoble},
    {path: "/numerodoble/:numero?", component: NumeroDoble},
]

const router = createRouter ({
    history: createWebHistory(),
    routes: myRoutes
})

export default router