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
    html {
        height: 100%;
    }

    body {
        margin: 0;
        height: 100%;

        #app {
            font-family: Avenir, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #2c3e50;
            height: 100%;
            display: flex;
            flex-direction: column;

            header {
                .app-title {
                    margin: 0;
                    position: absolute;
                    font-style: italic;
                    left: 20px;
                    font-size: 60px;
                }
            }

            main {
                flex-grow: 1;
                padding: 20px;
            }
        }
    }
</style>
