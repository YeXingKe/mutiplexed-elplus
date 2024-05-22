import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        component: Home
      }
      // {
      //   path: '/notification',
      //   component: () => import('../views/notification/index.vue')
      // },
      // {
      //   path: '/menu',
      //   component: () => import('../views/menu/index.vue')
      // },
      // {
      //   path: '/form',
      //   component: () => import('../views/form/index.vue')
      // },
      // {
      //   path: '/modalForm',
      //   component: () => import('../views/modalForm/index.vue'),
      // },
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
