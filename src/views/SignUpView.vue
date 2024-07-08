<template>
    <div class="form-wrapper">        
        <SignUpForm></SignUpForm>
    </div>
</template>

<script lang="ts" setup>
    import SignUpForm from '@/components/SignUpForm.vue'
</script>

<style lang="scss" scoped>
    .form-wrapper {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>