<template>
  <MenuTablaMultiplicar/>
  <router-view/>
</template>

<script>
import MenuTablaMultiplicar from './components/routingtablamultiplicar/MenuTablaMultiplicar.vue';

export default {
  name: 'App',
  components: {
    MenuTablaMultiplicar
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
