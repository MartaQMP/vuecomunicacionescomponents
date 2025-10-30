<template>
    <div id="div1">
        <h1>Tabla</h1>
        <hr/>
        <table>
            <thead>
                <tr>
                    <th>Operacion</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="res in resultados" :key="res.multiplicador">
                    <td>{{ this.$route.params.numero }} * {{ res.multiplicador }} =</td>
                    <td>{{ res.resultado }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicar",
    data() {
        return {
            resultados: [],
        };
    },
    methods: {
        hacerMultiplicacion() {
            let aux = []
            for (let i = 1; i <= 10; i++) {
                aux.push({ multiplicador: i, resultado: parseInt(this.$route.params.numero) * i });
            }
            this.resultados = aux
        },
    },
    mounted() {
        this.hacerMultiplicacion();
    },
    watch: {
        "$route.params.numero"(nextVal, oldVal) {
            let aux = []
            if (nextVal !== oldVal) {
                for (let i = 1; i <= 10; i++) {
                    aux.push({ multiplicador: i, resultado: parseInt(this.$route.params.numero) * i });
                }
                this.resultados = aux
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
table, thead {
    border-collapse: collapse;
    border: 2px solid black;
    margin:auto;
    width: 50%;
}
tr{
    border: 1px solid grey;
}
</style>
