import { createRouter, createWebHistory } from 'vue-router'
const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: () => import( '')
//   },
//   {
//     path: '/profile',
//     name: 'profile',
//     component: () => import('')
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import('../views/About.vue')
//   }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router