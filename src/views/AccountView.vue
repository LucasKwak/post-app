<template>
    <div class="account-wrapper">        
        <AccountInfo></AccountInfo>
    </div>
</template>

<script lang="ts" setup>
    import AccountInfo from '@/components/AccountInfo.vue'
</script>

<style lang="scss" scoped>
    .account-wrapper {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>