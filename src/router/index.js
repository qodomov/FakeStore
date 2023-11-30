import { createRouter, createWebHistory } from 'vue-router'
import { Products, Users, ProductUpdate, UserUpdate } from '../views'
import Default from '../layouts/Default.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      meta: { layout: Default },
      component: Products
    },
    {
      path: '/product/:id',
      name: 'productUpdate',
      meta: { layout: Default },
      component: ProductUpdate
    },
    {
      path: '/users',
      name: 'users',
      meta: { layout: Default },
      component: Users
    },
    {
      path: '/user/:id',
      name: 'userUpdate',
      meta: { layout: Default },
      component: UserUpdate
    },
  ]
})
export default router
