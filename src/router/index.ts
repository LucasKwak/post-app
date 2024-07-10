import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue';
import SignInView from '@/views/SignInView.vue';
import LogOutView from '@/views/LogOutView.vue';
import AccountView from '@/views/AccountView.vue';
import MyPostsView from '@/views/MyPostsView.vue';
import AllPostsView from '@/views/AllPostsView.vue';
import CreatePostView from '@/views/CreatePostView.vue';
import DefaultView from '@/views/DefaultView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView,
        children: [
            {
                path: "",
                component: DefaultView
            },
            {
                path: "/",
                redirect: 'allPosts'
            }, 
            {
                path: "allPosts",
                name: "allPosts",
                component: AllPostsView
            }, 
            {
                path: "myPosts",
                name: "myPosts",
                component: MyPostsView
            },
            {
                path: "createPost",
                name: "createPost",
                component: CreatePostView
            }
        ]
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
