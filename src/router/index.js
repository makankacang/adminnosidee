import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../views/dashboard.vue'
import repository from '../views/repositori.vue'
import journal from '../views/jurnal.vue'
import conference from '../views/conference.vue'
import customer from '../views/customer.vue'
import login from '../views/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/repository',
      name: 'repository',
      component: repository
    },
    {
      path: '/journal',
      name: 'journal',
      component: journal
    },
    {
      path: '/conference',
      name: 'conference',
      component: conference
    },
    {
      path: '/customer',
      name: 'customer',
      component: customer
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },

  ]
})

export default router
