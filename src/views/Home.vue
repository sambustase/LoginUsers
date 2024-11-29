<template>
  <div>
    <h2>Bienvenido a la página de inicio</h2>
    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'; // Importa getAuth y signOut desde Firebase v9+

export default {
  methods: {
    async logout() {
      const auth = getAuth(); // Obtén la instancia de autenticación
      await signOut(auth); // Cierra sesión
      this.$router.push('/login'); // Redirige a Login después de cerrar sesión
    }
  }
};
</script>

