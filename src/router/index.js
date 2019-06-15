import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/home'
import city from '@/components/page/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/city',
      name: 'city',
      component: city
    }
  ]
})
