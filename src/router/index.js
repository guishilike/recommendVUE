import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import NotFound from '@/components/404'
import Login from '@/components/login/Login'



Vue.use(Router)
Vue.use(Vuex)

let routes = [

  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true,
  },
  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true,
  },
]



export default routes
