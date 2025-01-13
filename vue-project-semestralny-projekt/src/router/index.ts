import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfilView from '../views/ProfilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Domov',
      component: HomeView,
    },
    {
      path: '/profil',
      name: 'profil',
      component: ProfilView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: () => import('../views/GalleryView.vue'),
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: () => import('../views/KontaktView.vue'),
    },
    {
      path: '/recenzie',
      name: 'recenzie',
      component: () => import('../views/RecenzieView.vue'),
    },
  ],
})

export default router
