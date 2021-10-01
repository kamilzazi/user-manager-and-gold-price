
import Vue from 'vue'
import Router from 'vue-router'
import GoldPrice from './components/GoldPrice'
import HomeComp from './components/Home'
import Home from './views/Home.vue'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    name: 'homecomp',
    component: HomeComp
  },
  {
    path: '/goldprice',
    name: 'GoldPrice',
    component: GoldPrice,
  }
]
})
