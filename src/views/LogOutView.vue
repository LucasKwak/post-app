<template>
    <div class="message-wrapper">        
        <LogOutMessage></LogOutMessage>
    </div>
</template>

<script lang="ts" setup>
    import LogOutMessage from '@/components/LogOutMessage.vue'
</script>

<style lang="scss" scoped>
    .message-wrapper {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>