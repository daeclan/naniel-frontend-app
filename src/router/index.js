import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CartedProductsIndex from '../views/CartedProductsIndex.vue'
import CausesIndex from '../views/CausesIndex.vue'
import CausesShow from '../views/CausesShow.vue'
import CausesCreate from '../views/CausesCreate.vue'
import OrdersIndex from '../views/OrdersIndex.vue'
import OrdersShow from '../views/OrdersShow.vue'
import UsersIndex from '../views/UsersIndex.vue'
import UsersShow from '../views/UsersShow.vue'
import ProductsIndex from '../views/ProductsIndex.vue'
import ProductsCreate from '../views/ProductsCreate.vue'
import ProductShow from '../views/ProductShow.vue'
import Login from '../views/Login.vue'
import LogOut from '../views/LogOut.vue'
import SignUp from '../views/Signup.vue'
import ProductEdit from '../views/ProductEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/products',
    name: 'ProductsIndex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsIndex.vue')
  },
  {
    path: '/products/new',
    name: 'ProductsCreate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsCreate.vue')
  },
  {
    path: '/products/:id',
    name: 'ProductShow',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductShow.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/logout',
    name: 'LogOut',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LogOut.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/products/:id/edit',
    name: 'ProductEdit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductEdit.vue')
  },
  {
    path: '/carted_products/',
    name: 'CartedProductsIndex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CartedProductsIndex.vue')
  },
  {
    path: '/orders/',
    name: 'OrdersIndex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OrdersIndex.vue')
  },
  {
    path: '/orders/:id',
    name: 'OrdersShow',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OrdersShow.vue')
  },
  {
    path: '/users/',
    name: 'UsersIndex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UsersIndex.vue')
  },
  {
    path: '/users/:id',
    name: 'UsersShow',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UsersShow.vue')
  },
  {
    path: '/causes/',
    name: 'CausesIndex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CausesIndex.vue')
  },
  {
    path: '/causes/new/',
    name: 'CausesCreate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CausesCreate.vue')
  },
  {
    path: '/causes/:id',
    name: 'CausesShow',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CausesShow.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
