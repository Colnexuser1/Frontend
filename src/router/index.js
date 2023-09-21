import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Error404 from '@/components/Error404'
import Login from '@/components/Login'
import Report from '@/components/Report'
import Project from '@/components/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'report',
          name: 'Report',
          component: Report
        },
        {
          path: 'project',
          name: 'Project',
          component: Project
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
      path: '*',
      redirect: '/error404'
    }
  ]
})
