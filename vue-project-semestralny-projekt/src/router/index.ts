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
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),
    },
    {
      path: '/profil',
      name: 'profil',
      component: ProfilView,
    },
    {
      path: '/qna',
      name: 'qna',
      component: () => import('../views/QnAView.vue'),
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
