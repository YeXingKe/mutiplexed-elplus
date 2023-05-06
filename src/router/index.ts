import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Container from '~/components/layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/chooseIcon',
        component: () => import('../views/icon-list/index.vue')
      },
      // {
      //   path: '/chooseArea',
      // component: () => import('../views/choose-area/index.vue'),
      // },
      // {
      //   path: '/trend',
      //   component: () => import('../views/trend/index.vue'),
      // },
      {
        path: '/notification',
        component: () => import('../views/notification/index.vue')
      },
      {
        path: '/menu',
        component: () => import('../views/menu/index.vue')
      },
      {
        path: '/chooseTime',
        component: () => import('../views/choose-time/index.vue')
      },
      {
        path: '/progress',
        component: () => import('../views/progress/index.vue')
      },
      {
        path: '/chooseCity',
        component: () => import('../views/choose-city/index.vue')
      },
      {
        path: '/form',
        component: () => import('../views/form/index.vue')
      },
      // {
      //   path: '/modalForm',
      //   component: () => import('../views/modalForm/index.vue'),
      // },
      {
        path: '/table',
        component: () => import('../views/table/index.vue')
      },
      {
        path: '/calendar',
        component: () => import('../views/calendar/index.vue')
      },
      {
        path: '/directive',
        component: () => import('../views/directives/index.vue')
      },
      {
        path: '/demo',
        component: () => import('../views/demo/index.vue')
      },
      {
        path: '/attachment',
        component: () => import('../views/attachment/index.vue')
      },
      {
        path: '/verify-code',
        component: () => import('../views/verify-code/index.vue')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
