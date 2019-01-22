import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserLock } from '@fortawesome/free-solid-svg-icons'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Auth from '@okta/okta-vue'

import landing from './components/landing/landing.component.vue'
import login from './components/login/login.component.vue'
import dashboard from './components/dashboard/dashboard.component.vue'
import documents from './components/documents/documents.component.vue'
import contributions from './components/contributions/contributions.component.vue';
import profile from './components/profile/profile.component.vue';

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Auth, {
  issuer: 'https://pension-plan.oktapreview.com/oauth2/default',
  client_id: '0oaj17prx2Pm9BRlK0h7',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})

library.add(faUserLock)
library.add(faSyncAlt)
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
      { path: '/documents', component: documents, meta: { requiresAuth: true }},
      { path: '/contributions', component: contributions, meta: { requiresAuth: true }},
      { path: '/profile', component: profile, meta: { requiresAuth: true }}
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
