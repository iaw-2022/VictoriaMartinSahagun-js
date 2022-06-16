import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActividadesView from '../views/ActividadesView.vue'
import ReservarView from '../views/ReservarView.vue'
import ComidasView from '../views/ComidasView.vue'

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
      path: '/reservar',
      name: 'reservar',
      component: ReservarView
    },
    {
      path: '/comidas',
      name: 'comidas',
      component: ComidasView
    }
  ]
})

export default router
