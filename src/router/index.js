import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '@auth0/auth0-vue'
import HomeView from '../views/HomeView.vue'
import ActividadesView from '../views/ActividadesView.vue'
import ReservarActividadView from '../views/ReservarActividadView.vue'
import ReservarComidaView from '../views/ReservarComidaView.vue'
import ComidasView from '../views/ComidasView.vue'
import MisReservasActividades from '../views/MisReservasActividades.vue'
import MisReservasComidas from '../views/MisReservasComidas.vue'
import ModificarReservaActividadView from '../views/ModificarReservaActividadView.vue'
import ModificarReservaComidaView from '../views/ModificarReservaComidaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/actividades',
      name: 'actividades',
      component: ActividadesView
    },
    {
      path: '/actividades/reservar/:id',
      name: 'reservarActividad',
      component: ReservarActividadView,
      beforeEnter: authGuard
    },
    {
      path: '/comidas/reservar/:id',
      name: 'reservarComida',
      component: ReservarComidaView,
      beforeEnter: authGuard
    },
    {
      path: '/comidas',
      name: 'comidas',
      component: ComidasView
    },
    {
      path: '/misreservas/actividades',
      name: 'misReservasActividades',
      component: MisReservasActividades,
      beforeEnter: authGuard
    },
    {
      path: '/misreservas/comidas',
      name: 'misReservasComidas',
      component: MisReservasComidas,
      beforeEnter: authGuard
    },
    {
      path: '/misreservas/actividades/modificar/:id',
      name: 'modificarReservaActividad',
      component: ModificarReservaActividadView,
      beforeEnter: authGuard
    },
    {
      path: '/misreservas/comidas/modificar/:id',
      name: 'modificarReservaComida',
      component: ModificarReservaComidaView,
      beforeEnter: authGuard
    },
  ]
})

export default router
