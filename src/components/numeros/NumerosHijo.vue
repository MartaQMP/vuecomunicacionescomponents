<template>
    <div id="div1">
        <br/>
        <h1>Hijo numero: {{ numero }}</h1>
        <br/>
        <button class="btn btn-warning" @click="llamarSumarNumeros">Sumar {{ numero }}</button>
    </div>
</template>

<script>
    export default {
        name: "NumerosHijo",
        props: ["numero"],
        methods: {
            //AQUI LLAMO AL NOMBRE Q HE PUESTO AL METODO PADRE
            //Y LE PASO PARAMETROS
            llamarSumarNumeros(){
                this.$emit("metodoPadre", this.numero)
            }

        }
    }
</script>

<style scoped>
#div1 {
    margin:auto;
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