import { createApp } from 'vue'
import './assets/scss/style.scss'
import { createRouter, createWebHistory } from 'vue-router'
import VueGtag from 'vue-gtag'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faBars,
  faCalendar,
  faCloudArrowDown,
  faComment,
  faEnvelope,
  faLink,
  faLocationDot,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub,
  faLinkedin,
  faProductHunt,
} from '@fortawesome/free-brands-svg-icons'

import App from './App.vue'

import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Experience from './pages/Experience.vue'

library.add(
  // Solid
  faBars,
  faCalendar,
  faCloudArrowDown,
  faComment,
  faEnvelope,
  faLink,
  faLocationDot,
  faXmark,

  // Brands
  faGithub,
  faLinkedin,
  faProductHunt,
)

const metaTitlePrefix = 'Jason Macfarlane'

const routes = [
  {
    path: '/',
    component: About,
  },
  {
    path: '/contact',
    component: Contact,
    meta: {
      title: `${metaTitlePrefix} | Contact`,
    },
  },
  {
    path: '/experience',
    component: Experience,
    meta: {
      title: `${metaTitlePrefix} | Experience`,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes,
})

router.beforeEach((to) => {
  document.title = to.meta.title as string ?? `${metaTitlePrefix} | Full-Stack Engineer`
})

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(VueGtag, {
    config: { id: 'G-R8F6P9360S' },
  }, router)
  .mount('#app')
