<template>
    <div>
        <h1>Padre</h1>
        <ul>
            <li v-for="deporte in deportes" :key="deporte">
                <HijoDeporte :nombredeporte="deporte"/>
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
        };
    },
};
</script>

<style lang="scss" scoped></style>
