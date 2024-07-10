import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue';
import SignInView from '@/views/SignInView.vue';
import LogOutView from '@/views/LogOutView.vue';
import AccountView from '@/views/AccountView.vue';

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
    },
    {
        path: '/log-out',
        name: 'log-out',
        component: LogOutView
    },
    {
        path: '/account',
        name: 'account',
        component: AccountView
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router
