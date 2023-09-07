import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Error404 from '@/components/Error404'
import Login from '@/components/Login'
import Actividades from '@/components/Actividades'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '',
          name: 'Dashboard',
          redirect: Actividades
        },
        {
          path: 'actividades',
          name: 'Actividades',
          component: Actividades
        }
      ]
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
      path: '/',
      redirect: Dashboard
    },
    {
      path: '*',
      redirect: '/error404'
    }
  ]
})
