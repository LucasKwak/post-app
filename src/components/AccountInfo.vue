<template>
    <h2>Account info</h2>
    <div v-if="loading" class="spinner"></div>
    <div v-else class="info-wrapper">
        <p><span class="info-title">Name:</span> {{ user.name }}</p>
        <p><span class="info-title">Last name:</span> {{ user.lastName }}</p>
        <p><span class="info-title">Username:</span> {{ user.username }}</p>
        <p><span class="info-title">Email:</span> {{ user.email }}</p>
    </div>
</template>

<script lang="ts" setup>
    import IUser from '@/interfaces/IUser';
    import { useAuthStore } from '@/store/auth';
    import { onMounted, Ref, ref } from 'vue';

    const store = useAuthStore();
    const user:Ref<IUser> = ref({});
    let loading:Ref<boolean> = ref(true);

    onMounted(
        async () => {
            user.value = await store.getAccountInfo();
            loading.value = false;
        }
    )

</script>

<style lang="scss" scoped>

    h2 {
        font-size: 30px; 
    }

    .info-wrapper {
        display: flex;
        flex-direction: column;
        border: 2px solid $secondaryColor;
        border-radius: 15px;
        padding: 20px;
        gap: 25px;

        p {
            margin: 0;
        }

        .info-title {
            font-weight: bold;
        }
    }

    .spinner {
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
        margin: auto; /* Center the spinner */
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>