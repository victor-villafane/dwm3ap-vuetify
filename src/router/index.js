import DetalleView from '@/views/DetalleView.vue'
import ListadoView from '@/views/ListadoView.vue'
import MovieListView from '@/views/MovieListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: ListadoView,
    name: 'listado',
  },
  {
    path: '/detalle/:id',
    component: DetalleView,
    name: 'detalle',
  },
  {
    path: '/movies',
    component: MovieListView,
    name: 'movies',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
