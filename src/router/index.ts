import { createRouter, createWebHistory, RouteRecordRaw, RouteLocationNormalizedGeneric, NavigationGuardNext } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue';
import SignInView from '@/views/SignInView.vue';
import LogOutView from '@/views/LogOutView.vue';
import AccountView from '@/views/AccountView.vue';
import MyPostsView from '@/views/MyPostsView.vue';
import AllPostsView from '@/views/AllPostsView.vue';
import CreatePostView from '@/views/CreatePostView.vue';
import DefaultView from '@/views/DefaultView.vue';
import { useAuthStore } from '@/store/auth';

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

        // Obtenemos del local storage si el usuario esta autenticado o no
        // Esto lo hago para que si el usuario refresca la pagina el router sepa el estado del que venia (si refrescó estando autenticado o no)
        // No es sufiente accediendo directamente al store (antes de montar la aplicacion se hace una llamada fetchUser que usa onAuthStateChanged para actualizar el user del store)
        // porque el router comprueba ese user en el estado inicial de la store: a null. Esto quiere decir que el router llega antes de que se llame a la funcion de 
        // fetchUser, por eso cuando se hace el refresh se manda al usuario a la pagina de iniciar sesion.

        // Puede no ser la mejor solucion, pero lo es lo unico que se me ha ocurrido. Ademas si alguien intenta cambiar el valor de "false" a
        // "true", podrá entrar a las vistas que requieran autenticación pero no podrá ver nada ya que todas las peticiones a
        // firestore están con guardas de seguridad que necesitan que el user que se le envia en la peticion no sea null.
        const isAuthenticatedString = localStorage.getItem("isAuthenticated");
        let isAuthenticated = false;
        if(isAuthenticatedString == "true") {
            isAuthenticated = true;
        }

        console.log("Estas autenticado desde beforeEach: " + isAuthenticated + "   to: "+ to.name?.toString() + ", from: " + from.name?.toString());
        const needAuth = to.meta.requireAuth;

        if(needAuth && !isAuthenticated) {
            next('sign-in');
        }else{
            next();
        }
    }
)

export default router
