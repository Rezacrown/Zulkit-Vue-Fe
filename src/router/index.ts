import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Landing/index.vue')
    },
    {
      path: '/register',
      name: 'register.pages',
      component: () => import('@/pages/Register/index.vue')
    },
    {
      path: '/login',
      name: 'login.pages',
      component: () => import('@/pages/Login/index.vue')
    },
    {
      path: '/product/:id',
      // name: 'login.pages',
      component: () => import('@/pages/Products/index.vue')
    },
    {
      path: '/pricing',
      name: 'pricing.pages',
      component: () => import('@/pages/Pricing/index.vue')
    },
    {
      path: '/categories',
      name: 'categories.pages',
      component: () => import('@/pages/Categories/index.vue')
    },
    {
      path: '/categories/:id',
      name: 'categories-detail.pages',
      component: () => import('@/pages/CategoriesDetail/index.vue')
    },
    {
      path: '/success-checkout',
      name: 'checkout.success',
      component: () => import('@/pages/Success/success-checkout.vue')
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
