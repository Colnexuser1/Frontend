import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
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
        {path: 'actividades', component: Actividades}
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
