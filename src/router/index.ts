import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Checkout from '@/components/checkout.vue'
import Add from '@/components/add.vue'
import Delete from '@/components/delete.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Delete.vue',
    name: 'delete',
    component: Delete
  },
  {
    path: '/Add.vue',
    name: 'delete',
    component: Add
  },
  {
    path: '/Checkout.vue',
    name: 'delete',
    component: Checkout
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
