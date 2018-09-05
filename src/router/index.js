import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Contact from '@/components/Contact'
import Design from '@/components/Design'
import Construction from '@/components/Construction'
import Prototyping from '@/components/Prototyping'
import Maintenance from '@/components/Maintenance'
import Pricing from '@/components/Pricing'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/design',
      name: 'design',
      component: Design
    },
    {
      path: '/construction',
      name: 'construction',
      component: Construction
    },
    {
      path: '/prototyping',
      name: 'prototyping',
      component: Prototyping
    },
    {
      path: '/maintenance',
      name: 'maintenance',
      component: Maintenance
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
})
