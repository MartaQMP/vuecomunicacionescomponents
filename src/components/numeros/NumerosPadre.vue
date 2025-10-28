<template>
    <div id="div1">
        <h1>Padre</h1>
        <h3>La suma es {{ suma }}</h3>
        <button class="btn btn-info" @click="generarNumero">Nuevo Numero</button>
        <div v-for="numero in numeros" :key="numero">
            <hr/>
            <!-- AQUI PASO AL HIJO EL METODO Y UN NOMBRE QUE QUIERA -->
            <NumerosHijo :numero="numero" v-on:metodoPadre="hacerSuma" />
        </div>
    </div>
</template>

<script>
import NumerosHijo from "./NumerosHijo.vue";
export default {
    name: "NumerosPadre",
    components: {
        NumerosHijo,
    },
    data() {
        return {
            suma: 0,
            numeros: [3, 23, 30],
        };
    },
    methods: {
        hacerSuma(numero) {
            this.suma += numero;
        },
        generarNumero() {
            let aleatorio = parseInt(Math.random() * 50 + 1);
            this.numeros.push(aleatorio);
        },
    },
};
</script>

<style scoped>
#div1 {
    margin:auto;
    margin-top: 2%;
    width: 80%;
    text-align: center;
}
h1 {
    color: white;
    background-color: black;
    padding: 2%;
    border-radius: 5px;
    width: 80%;
    margin: auto;
}</style>
