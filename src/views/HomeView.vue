<template>
    <div class="home-wrapper">
        <section>
            <NavLateralMenu></NavLateralMenu>
        </section>
        <section>
            <router-view/>
        </section>
    </div>
</template>

<script lang="ts" setup>
    import NavLateralMenu from '@/components/NavLateralMenu.vue';
</script>

<style lang="scss" scoped>
    .home-wrapper {
        display: flex;
        flex-direction: row;
        padding: 20px;
    }
</style>
