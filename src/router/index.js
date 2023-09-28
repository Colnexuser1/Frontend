import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Error404 from '@/components/Error404'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/error404',
      name: 'Error404',
      component: Error404
    },
    {
      path: '*',
      redirect: '/error404'
    }
  ]
})
