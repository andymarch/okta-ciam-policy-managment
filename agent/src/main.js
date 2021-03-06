import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserLock } from '@fortawesome/free-solid-svg-icons'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faUserMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Auth from '@okta/okta-vue'

import landing from './components/landing/landing.component.vue'
import login from './components/login/login.component.vue'
import dashboard from './components/dashboard/dashboard.component.vue'
import profile from './components/profile/profile.component.vue'
import accounts from './components/accounts/accounts.component.vue'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Auth, {
  issuer: process.env.VUE_APP_ISSUER,
  client_id: process.env.VUE_APP_CLIENT_ID,
  redirect_uri: process.env.VUE_APP_REDIRECT,
  scope: process.env.VUE_APP_SCOPE
})

library.add(faUserLock)
library.add(faSyncAlt)
library.add(faUser)
library.add(faUserPlus)
library.add(faUserMinus)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const router = new VueRouter(
  {
    mode: 'history',
    base: '/',
    routes: [
      { path: '/', component: landing},
      { path: '/login', component: login},
      { path: '/implicit/callback', component: Auth.handleCallback() },
      { path: '/dashboard', component: dashboard, meta: { requiresAuth: true }},
      { path: '/profile', component: profile, meta: { requiresAuth: true }},
      { path: '/accounts', component: accounts, meta: { requiresAuth: true }},
    ]
  }
)

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !(await Vue.prototype.$auth.isAuthenticated())) {
    // Navigate to custom login page
    next({ path: '/login' })
  } else {
    next()
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')