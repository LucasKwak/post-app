<template>
    <div class="form-wrapper">        
        <SingUpForm></SingUpForm>
    </div>
</template>

<script lang="ts" setup>
    import SingUpForm from '@/components/SingUpForm.vue'
</script>

<style lang="scss" scoped>
    .form-wrapper {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>