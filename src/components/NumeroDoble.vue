<template>
    <div id="div1">
        <h1>Numero Doble: {{ doble }}</h1>
        <hr/>
        <h3>{{ mensaje }}</h3>
        <button @click="redirectToHome()" class="btn btn-warning">Ir a home</button>
    </div>
</template>

<script>
export default {
    name: "NumeroDoble",
    data() {
        return {
            mensaje: "",
            doble: 0,
        };
    },
    methods: {
        redirectToHome(){
            this.$router.push("/")
        }
    },
    mounted() {
        //LOS PARAMETROS SIEMPRE SON STRING NO IMPORTA SI SON NUMERICOS
        let numero = this.$route.params.numero;
        if (numero == "") {
            this.mensaje = "Sin parametros";
        } else {
            this.mensaje = "Parametro: " + numero;
            this.doble = parseInt(numero) * 2;
        }
    },
    watch: {
        "$route.params.numero"(nextVal, oldVal) {
            if (nextVal !== oldVal) {
                this.mensaje = "Esto ha cambiado: " + this.$route.params.numero;
                this.doble = parseInt(this.$route.params.numero) * 2;
            }
        },
    },
};
</script>

<style scoped>
#div1 {
    margin: auto;
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
}
</style>
