<template>
    <div id="div1">
        <h1>Comics</h1>
        <br />
        <form v-on:submit.prevent="crearComic()">
            <label class="form-label">Titulo</label>
            <input class="form-control" type="text" v-model="comicForm.titulo" />
            <label class="form-label">Descripcion</label>
            <input class="form-control" type="text" v-model="comicForm.descripcion" />
            <label class="form-label">Imagen</label>
            <input class="form-control" type="text" v-model="comicForm.imagen" />
            <label class="form-label">Año</label>
            <input class="form-control" type="number" v-model="comicForm.year" />
            <br />
            <button class="btn btn-primary">Nuevo Comic</button>
        </form>
        <br />
        <h3>El favorito es: {{ favorito }}</h3>
        <hr />
        <div id="comics" v-for="(comic, index) in comics" :key="comic">
            <ComicComponent :comic="comic" :index="index" v-on:metodoPadreSeleccionar="seleccionarFavorito" v-on:metodoPadreBorrar="borrarComic" />
        </div>
    </div>
</template>

<script>
import ComicComponent from "./ComicComponent.vue";

export default {
    name: "ComicsComponent",
    components: {
        ComicComponent,
    },
    methods: {
        seleccionarFavorito(comic) {
            this.favorito = comic.titulo;
        },
        crearComic() {
            this.comics.push(this.comicForm);
        },
        borrarComic(index) {
            this.comics.splice(index, 1);
        },
    },
    data() {
        return {
            comicForm: {
                titulo: "",
                imagen: "",
                descripcion: "",
                year: 0,
            },
            favorito: null,
            comics: [
                {
                    titulo: "Spiderman",
                    imagen: "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
                    descripcion: "Hombre araña",
                    year: 1997,
                },
                {
                    titulo: "Wolverine",
                    imagen: "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
                    descripcion: "Lobezno",
                    year: 2003,
                },
                {
                    titulo: "Guardianes de la Galaxia",
                    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIMlTHFcnaEn2xKA9C2XqmlI8NDim6VKvVA&s",
                    descripcion: "Yo soy Groot",
                    year: 2006,
                },
                {
                    titulo: "Avengers",
                    imagen: "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
                    descripcion: "Los Vengadores",
                    year: 1993,
                },
                {
                    titulo: "Spawn",
                    imagen: "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
                    descripcion: "Al Simmons",
                    year: 2000,
                },
                {
                    titulo: "Batman",
                    imagen: "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
                    descripcion: "Murcielago",
                    year: 2001,
                },
            ],
        };
    },
};
</script>

<style scoped>
@import "../../assets/css/comics.css";
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
h3 {
    background-color: black;
    color: white;
    padding: 5px;
    border-radius: 5px;
    width: 70%;
    margin: auto;

}
form {
    width: 60%;
    margin: auto;
}
input {
    text-align: center;
}
</style>
