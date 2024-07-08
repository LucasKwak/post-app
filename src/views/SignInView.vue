<template>
    <div class="form-wrapper">        
        <SignInForm></SignInForm>
    </div>
</template>

<script lang="ts" setup>
    import SignInForm from '@/components/SignInForm.vue'
</script>

<style lang="scss" scoped>
    .form-wrapper {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>