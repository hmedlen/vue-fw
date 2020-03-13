import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/songs',
    name: 'songs',
    component: () => import('../views/Songs.vue')
  },
  {
    path: '/songs/create',
    name: 'songs-create',
    component: () => import('../views/CreateSong.vue')
  },
  {
    path: '/song/:songId',
    name: 'song',
    component: () => import('../components/ViewSong/ViewSong.vue')
  },
  {
    path: '/song/:songId/edit',
    name: 'song-edit',
    component: () => import('../views/EditSong.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
