import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../views/Hello.vue'
import Landing from '../views/Landing.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'hello',
    component: Hello
  },
  {
    path: '/landing',
    name: 'landing',
    component: Landing
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
