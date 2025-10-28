<template>
    <div id="div1">
        <h2>{{ comic.titulo }}</h2>
        <p>{{ comic.descripcion }}</p>
        <img :src="comic.imagen"/>
        <hr/>
        <p :class="{
            blanco: comic.year<=2000,
            negro: comic.year>2000
        }">Año: {{ comic.year }}</p>
        <br/>
        <button class="btn btn-dark" @click="seleccionarFavorito()">Seleccionar favorito</button>
        <button class="btn btn-light" @click="eliminarComic()">Borrar</button>
    </div>
</template>

<script>
export default {
    name: "ComicComponent",
    props: ["comic", "index"],
    methods: {
        seleccionarFavorito(){
            this.$emit("metodoPadreSeleccionar", this.comic)
        },
        eliminarComic(){
            this.$emit("metodoPadreBorrar", this.index)
        }
    }
};
</script>

<style scoped>
#div1 {
    margin: auto;
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
img {
    width: 70%;
}
button {
    margin: 2%;
}
</style>
