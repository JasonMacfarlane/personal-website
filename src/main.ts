import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Pages
import About from './pages/About.vue'
import Experience from './pages/Experience.vue'

// Font Awesome
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
  faProductHunt
)

const routes = [
  {
    path: '/',
    component: About,
  },
  {
    path: '/experience',
    component: Experience,
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes,
})

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app')