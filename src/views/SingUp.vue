<template>
  <div>
    <h2>Registro</h2>
    <input v-model="email" type="email" placeholder="Correo electrónico" />
    <input v-model="password" type="password" placeholder="Contraseña" />
    <button @click="signUp">Registrarse</button>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Firebase v9+ imports

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async signUp() {
      const auth = getAuth(); // Obtén la instancia de autenticación
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push('/home'); // Redirige a Home después de registrarse
      } catch (err) {
        this.error = "Error al registrarse: " + err.message;
      }
    }
  }
};
</script>
