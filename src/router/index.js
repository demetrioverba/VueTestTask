import VueRouter from 'vue-router'
import Home from "@/views/Home"

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contactInfo',
      name: 'info',
      component: () => import('@/views/ContactInfo'),
      props: true
    },
    {
      path: '/contactInfo/:id',
      name: 'contactPage',
      component: () => import('@/views/ContactInfo'),
      props: true
    },

  ]
})