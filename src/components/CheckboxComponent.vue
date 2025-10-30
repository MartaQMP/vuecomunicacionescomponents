<template>
    <div id="div1">
        <h1>CheckBox</h1>
        <hr />
        <button class="btn btn-dark" @click="generarNumeros()">Generar Checkbox</button>
        <div v-if="numeros.length !== 0">
            <form id="form1" v-for="num in numeros" :key="num">
                <input class="form-checkbox" type="checkbox" :value="num" v-model="seleccionados" />
                <label class="form-label">{{ num }}</label>
            </form>
        </div>
        <h3>La suma es {{ suma }}</h3>
    </div>
</template>

<script>
export default {
    name: "CheckboxComponent",
    methods: {
        generarNumeros() {
            this.numeros = [];
            let aleatorio = parseInt(Math.random() * 10 + 1);
            for (let i = 1; i <= aleatorio; i++) {
                let numAle = parseInt(Math.random() * 50 + 1);
                this.numeros.push(numAle);
            }
        },
        hacerSuma() {
            let aux = [...this.seleccionados]
            if (aux.length != 0) {
                aux.forEach(num=> {
                    this.suma += parseInt(num)
                
                })
            }
        },
    },
    data() {
        return {
            numeros: [],
            suma: 0,
            seleccionados: [],
        };
    },
    updated() {
        this.hacerSuma();
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
#form1 {
    margin: auto;
}
</style>
