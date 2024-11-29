<template>
  <div>
    <h2>Iniciar sesión</h2>
    <input v-model="email" type="email" placeholder="Correo electrónico" />
    <input v-model="password" type="password" placeholder="Contraseña" />
    <button @click="login">Iniciar sesión</button>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Firebase v9+ imports

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async login() {
      const auth = getAuth(); // Obtén la instancia de autenticación
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push('/home'); // Redirige a Home después de iniciar sesión
      } catch (err) {
        this.error = "Error al iniciar sesión: " + err.message; // Muestra el error si algo sale mal
      }
    }
  }
};
</script>
