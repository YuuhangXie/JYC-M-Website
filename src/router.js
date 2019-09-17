import Vue from 'vue'
import Router from 'vue-router'

// primary router
import Index from 'pages/index/index'
import ProductDetail from 'pages/productDetail/detail'
import More from 'pages/more/more'
import Isregister from 'pages/login/isRegister'
import Login from 'pages/login/login'
import Register from 'pages/login/register'

// secondary router
import Home from 'pages/home/home'
import Product from 'pages/product/product'
import Discover from 'pages/discover/discover'
import Profile from 'pages/profile/profile'

Vue.use(Router)

// router list
// /
// |-- Index
// |---- Home
// |---- Product
// |---- Discover
// |---- Profile
// |-- Detail
// |---- ID
// |-- More`


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    { // Init page set into '/index/home'
      path: '/index',
      component: Index,
      redirect: '/index/home',
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'product',
          component: Product
        },
        {
          path: 'discover',
          component: Discover
        },
        {
          path: 'profile',
          component: Profile
        },
      ]
    },
    {
      path: '/detail/:id',
      component: ProductDetail
    },
    {
      path: '/more',
      component: More
    },
    {
      path: '/isregister',
      component: Isregister
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
