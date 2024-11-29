<template>
  <div id="app">
    <h1>Aplicación con Autenticación</h1>
    <router-view /> <!-- Aquí se renderizan las vistas según la ruta -->
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1 {
  color: #42b983;
}
</style>

