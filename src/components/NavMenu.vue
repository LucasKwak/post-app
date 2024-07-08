<template>
    <nav class="nav-menu">
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'sign-up'}">Sing up</router-link>
        <router-link :to="{name: 'sign-in'}">Sign In</router-link> 
    </nav>
</template>

<script lang="ts" setup>

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
            border: 2px solid $contrastColor;
            border-radius: 15px;
            padding: 5px;

            &.router-link-exact-active {
                color: $contrastColor;
            }
        }
    }
</style>