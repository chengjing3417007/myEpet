import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../pages/Main/Main.vue'
import Category from '../pages/Category/Category.vue'
import Cart from '../pages/Cart/Cart.vue'
import Login from '../pages/Login/Login.vue'
import Register from '../pages/Register/Register.vue'
import CategoryBrand from '../pages/Category/CategoryBrand/CategoryBrand.vue'
import CategoryClassify from '../pages/Category/CategoryClassify/CategoryClassify.vue'
import All from '../pages/All/All.vue'

Vue.use(VueRouter)

export default new VueRouter({
  /* mode: 'history', */
  routes: [
    {
      path: '/',
      redirect: '/main',
      meta: {showFooter: true}
    },
    {
      path: '/main',
      component: Main,
      meta: {showFooter: true}
    },
    {
      path: '/category',
      component: Category,
      children: [
        {
          path: '/category/classify',
          component: CategoryClassify,
          meta: {showFooter: true}
        },
        {
          path: '/category/brand',
          component: CategoryBrand,
          meta: {showFooter: true}
        },
        {
          path: '',
          redirect: '/category/classify'
        }
      ]
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register,
      meta: {showFooter: true}
    },
    {
      path: '/all',
      component: All
    }
  ]
})
