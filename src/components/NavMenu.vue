<template>
    <nav class="nav-menu">
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link v-if="isAuthenticated == true" :to="{name: 'account'}">Account</router-link>
        <router-link v-if="isAuthenticated == true" :to="{name: 'log-out'}">Log out</router-link>
        <router-link v-if="isAuthenticated == false" :to="{name: 'sign-up'}">Sing up</router-link>
        <router-link v-if="isAuthenticated == false" :to="{name: 'sign-in'}">Sign In</router-link>
    </nav>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';
    import { useAuthStore } from '../store/auth';

    const store = useAuthStore();
    const isAuthenticated = computed(() => store.isAuthenticated);
</script>

<style lang="scss" scoped>
    .nav-menu {
        background-color: $primaryColor;
        display: flex;
        flex-direction: row;
        justify-content: right;
        padding: 20px;
        gap: 25px;

        a {
            font-weight: bold;
            color: $textColor;
            text-decoration: none;
            border: 2px solid $contrastColorLight;
            border-radius: 15px;
            padding: 8px;

            &.router-link-exact-active {
                color: $contrastColorLight;
            }
        }
    }
</style>