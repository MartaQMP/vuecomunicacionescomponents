<template>
    <div id="div1">
        <h1>Seleccion Multiple</h1>
        <hr />
        <form id="form1" v-on:submit.prevent="mostrarSeleccionados()">
            <label class="form-label">Selecciona elementos: </label><br />
            <select class="form-select" v-model="seleccionado" multiple>
                <option v-for="elemento in elementos" :key="elemento">{{ elemento }}</option>
            </select>
            <br />
            <button class="btn btn-primary">Mostrar seleccionados</button>
        </form>
        <div v-html=html></div>
    </div>
</template>

<script>
export default {
    name: "SeleccionMultiple",
    data() {
        return {
            seleccionado: [],
            elementos: ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5"],
            html: ""
        };
    },
    methods: {
        mostrarSeleccionados(){
            this.html = ""
            this.html += "<h2>"+this.seleccionado+"</h2>"
        }
    }
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
select {
    width: 20%;
    margin: auto;
}
#form1 {
    background: linear-gradient(#76D945, #45D95D,#45D9A8);
    width: 60%;
    margin: auto;
    padding: 5px;
    border-radius: 5px;
}
</style>
