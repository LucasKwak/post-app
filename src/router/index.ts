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
import { getAuth } from "firebase/auth";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView,
        meta: {
            requireAuth: false
        },
        children: [
            {
                path: "",
                component: DefaultView,
                meta: {
                    requireAuth: false
                },
            },
            {
                path: "/",
                redirect: 'allPosts'
            }, 
            {
                path: "allPosts",
                name: "allPosts",
                component: AllPostsView,
                meta: {
                    requireAuth: true
                },
            }, 
            {
                path: "myPosts",
                name: "myPosts",
                component: MyPostsView,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: "createPost",
                name: "createPost",
                component: CreatePostView,
                meta: {
                    requireAuth: true
                },
            }
        ]
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: SignUpView,
        meta: {
            requireAuth: false
        },
    },
    {
        path: '/sign-in',
        name: 'sign-in',
        component: SignInView,
        meta: {
            requireAuth: false
        },
    },
    {
        path: '/log-out',
        name: 'log-out',
        component: LogOutView,
        meta: {
            requireAuth: true
        },
    },
    {
        path: '/account',
        name: 'account',
        component: AccountView,
        meta: {
            requireAuth: true
        },
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach(
    (to, from, next) => {
        const isAuthenticated = getAuth().currentUser != null;
        console.log("Estas autenticado: " + isAuthenticated);
        const needAuth = to.meta.requireAuth;

        if(needAuth && !isAuthenticated) {
            next('sign-in');
        }else{
            next();
        }
    }
)

export default router
