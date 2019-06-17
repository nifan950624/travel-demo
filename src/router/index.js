import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/home'
import city from '@/components/page/city'
import readDetail from '@/components/page/detail.vue'

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
    },
    {
      path: '/detail/:id',
      name: 'readDetail',
      component: readDetail
    }
  ]
})
