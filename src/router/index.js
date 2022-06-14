import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActividadesView from '../views/ActividadesView.vue'
import ReservarActividadView from '../views/ReservarActividadView.vue'

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
      path: '/reservar/actividad',
      name: 'reservarActividad',
      component: ReservarActividadView
    }
  ]
})

export default router
