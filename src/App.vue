<template>
    <header>
        <h1 class="app-title">THE POST APP</h1>
        <NavMenu></NavMenu>
    </header>
    <main>
        <router-view/>
    </main>
</template>

<script setup>
    import NavMenu from '@/components/NavMenu.vue';
    import { useAuthStore } from './store/auth';
    import { onAuthStateChanged } from "firebase/auth";

    const store = useAuthStore();

    // Establecemos un observer al auth del store comun a toda la app
    onAuthStateChanged(store.auth, 
        (user) => {
            if(user) {
                alert("Esta autenticado: app.vue");
                store.changeAuthState(true);
            }else{
                alert("No esta autenticado: app.vue");
                store.changeAuthState(false);
            }
        }
    );
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    body {
        margin: 0;

        .app-title {
            margin: 0;
            position: absolute;
            font-style: italic;
            left: 20px;
            font-size: 60px;
        }
    }
</style>
