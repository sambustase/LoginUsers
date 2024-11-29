import { createRouter, createWebHistory } from 'vue-router';
import { getAuth } from 'firebase/auth';
import Home from '../views/Home.vue';
import SignUp from '../views/SingUp.vue';
import Login from '../views/Login.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'  // Redirige a Login por defecto
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,  // Asegúrate de que se importó correctamente
    meta: { requiresGuest: true }  // Solo accesible si no estás autenticado
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,  // Asegúrate de que se importó correctamente
    meta: { requiresGuest: true }  // Solo accesible si no estás autenticado
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,  // Asegúrate de que se importó correctamente
    meta: { requiresAuth: true }  // Solo accesible si estás autenticado
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Protector de rutas
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const user = auth.currentUser; // Verifica si el usuario está autenticado

  // Si la ruta requiere autenticación y el usuario no está autenticado, redirige a login
  if (to.meta.requiresAuth && !user) {
    next('/login');
  } 
  // Si la ruta requiere que el usuario no esté autenticado y el usuario está autenticado, redirige a home
  else if (to.meta.requiresGuest && user) {
    next('/home'); // Redirige a home si el usuario ya está autenticado
  } 
  else {
    next(); // Permite el acceso a la ruta
  }
});

export default router;
