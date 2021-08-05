import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'


const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  children: [
    {
      path: 'all',
      name: 'All',
      component: () => import('@/views/All')
    },
    {
      path: 'analyse',
      name: 'Analyse',
      component: () => import('@/views/Analyse')
    },
    {
      path: 'music',
      name: 'Music',
      component: () => import('@/views/Music')
    },
  ]
}, ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router