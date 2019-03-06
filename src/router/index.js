import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/index'
import Login from '../pages/login'
import Register from '../pages/register'
import Account from '../pages/system/account'
import Auth from '../pages/system/auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
      	{
		    	path: '/system/account',
		      component: Account
		    },
		    {
		    	path: '/system/auth',
		      component: Auth
		    }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
  ]
});
