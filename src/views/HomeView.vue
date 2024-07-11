<template>
    <div class="home-wrapper">
        <section class="home-lateral-menu">
            <NavLateralMenu></NavLateralMenu>
        </section>
        <section class="home-main-wrapper">
            <router-view/>
        </section>
    </div>
</template>

<script lang="ts" setup>
    import NavLateralMenu from '@/components/NavLateralMenu.vue';
</script>

<style lang="scss" scoped>
    .home-wrapper {
        height: 100%;
        display: flex;
        flex-direction: row;
        gap: 20px;

        .home-lateral-menu {
            flex-shrink: 0;
        }

        .home-main-wrapper {
            flex-grow: 1;
        }
    }
</style>
