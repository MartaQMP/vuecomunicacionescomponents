<template>
    <div id="div1">
        <h2>{{ nombredeporte }}</h2>
        <button @click="seleccionarFavorito" class="btn btn-primary">Seleccionar favorito</button>
    </div>
</template>

<script>
export default {
    name: "HijoDeporte",
    props: ["nombredeporte"],
    mounted() {
        console.log(this.nombredeporte);
    },
    methods: {
        seleccionarFavorito(){
            console.log("Soy el hijo "+this.nombredeporte)
            //PARA ENVIAR INFORMACION SE REALIZA A PARTIR DE LA LLAMADA
            //CON CADA PARAMENTRO SEPARADO CON CMOAS DENTRO DEL METODO 
            //$EMIT
            this.$emit("seleccionarFavoritoParent", this.nombredeporte)
        }
    }
};
</script>

<style scoped>
#div1{
    margin: auto;
    width: 80%;
    display: block;
}
</style>
