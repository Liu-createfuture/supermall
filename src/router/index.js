import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const Home = () => import('../views/Home/Home.vue')
const Mine = () => import('../views/mine/mine.vue')
const Cart = () => import('../views/cart/cart.vue')
const ClassIfy = () => import('../views/ClassIfy/ClassIfy.vue')
const Detail = () => import('../views/detai/Detail.vue')

const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/mine',
  component: Mine
}, {
  path: '/cart',
  component: Cart
}, {
  path: '/classify',
  component: ClassIfy
}, {
  path: '/detail/:id',
  component: Detail
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router