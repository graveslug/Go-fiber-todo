import { createRouter, createWebHistory } from 'vue-router'

import Login from './pages/auth/LoginPage.vue'
import NotFound from './pages/NotFoundPage.vue'
import Signup from './pages/auth/SignupPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login'},
        { path: '/login', component: Login }, //domain.com/login. As for the component we tell vue that this is the components page we want to load on this route.
        { path: '/signup', component: Signup },
        { path: '/:notFound(.*)', component: NotFound }
    ]
})

export default router
