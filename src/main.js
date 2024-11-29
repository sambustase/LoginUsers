import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Asegúrate de importar el router

createApp(App)
  .use(router)  // Usar el router
  .mount('#app');
