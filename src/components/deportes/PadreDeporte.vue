<template>
    <div>
        <h1>Padre</h1>
        <h2 style="background-color: yellow" v-if="favorito">Su deporte favorito es {{ favorito }}</h2>
        <ul>
            <li v-for="deporte in deportes" :key="deporte">
                <HijoDeporte :nombredeporte="deporte" v-on:seleccionarFavoritoParent="seleccionarFavoritoParent" />
            </li>
        </ul>
    </div>
</template>

<script>
import HijoDeporte from "./HijoDeporte.vue";
export default {
    name: "PadreDeporte",
    components: {
        HijoDeporte,
    },
    data() {
        return {
            deportes: ["Futbol", "Baloncesto", "Formula 1"],
            favorito: null,
        };
    },
    methods: {
        seleccionarFavoritoParent(deporteFavorito) {
            console.log("Yo soy tu padre");
            this.favorito = deporteFavorito;
        },
    },
};
</script>

<style lang="scss" scoped></style>
