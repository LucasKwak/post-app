import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue';
import SignInView from '@/views/SignInView.vue';


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: SignUpView
    },
    {
        path: '/sign-in',
        name: 'sign-in',
        component: SignInView
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router
