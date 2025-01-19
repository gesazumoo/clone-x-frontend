import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue' // LoginPage 컴포넌트 경로
import SignUpPage from '../views/SignUpPage.vue'// SignupPage 컴포넌트 경로
import ComputedComponent from '../views/ComputedComponent.vue'
import MethodComponent from '../views/MethodComponent.vue'
import MainPage from '../views/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('access_token')
      if (token) {
        next('/main')
      } else {
        next()
      }
    },
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpPage,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('access_token')
      if (token) {
        next('/main')
      } else {
        next()
      }
    },
  },
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('access_token')
      if (token) {
        next()
      } else {
        next('/')
      }
    },
  },
  {
    path: '/computed',
    name: 'computed',
    component: ComputedComponent
  },
  {
    path: '/method',
    name: 'method',
    component: MethodComponent
  }
]

const router = createRouter({
  history: createWebHistory(),
//   history: createWebHistory()
  routes
})

export default router
