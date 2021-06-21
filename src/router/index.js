import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Buttons from '../views/Buttons'
import Forms from "@/views/Forms";
import Tables from "@/views/Tables";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: Buttons
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Forms
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
