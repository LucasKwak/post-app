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
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
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
