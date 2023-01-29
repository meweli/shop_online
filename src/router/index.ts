import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import productsPage from '@/views/products/productsPage.vue'
import categoriesPage from '@/views/categories/categoriesPage.vue'
import loginPage from '@/views/user/login.vue'
import register from '@/views/user/register.vue'
import userID from '@/views/user/userID.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/products',
    name: 'products',
    component: productsPage
  },
  {
    path: '/categories',
    name: 'categories',
    component: categoriesPage
  },
  {
    path: '/login',
    name: 'login',
    component: loginPage
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/userID',
    name: 'userID',
    component: userID
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
