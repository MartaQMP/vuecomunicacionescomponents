<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Tabla</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="ale in aleatorios" :key="ale">
                            <router-link :to="'/tablamultiplicar/' + ale" class="nav-link">Tabla del {{ ale }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "MenuTablaMultiplicar",
    data() {
        return {
            aleatorios: [],
        };
    },
    methods: {
        generarAleatorios() {
            for (let i = 1; i <= 10; i++) {
                this.aleatorios.push(parseInt(Math.random() * 50 + 1));
            }
        },
    },
    mounted(){
        this.generarAleatorios()
    }
};
</script>

<style scoped></style>
