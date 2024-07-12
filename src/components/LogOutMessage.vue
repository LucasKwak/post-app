<template>
    <div class="log-out-message">
        <div class="description-wrapper">
            <h2>Log Out</h2>
            <p>Are you sure you want to log out of your account?</p>
        </div>
        <div class="button-message-wrapper">
            <p>Logging out will end your current session and you will need to sign in again to access your account.</p>
            <button class="form__button" type="submit" @click.prevent="logOut">Log Out</button>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import { signOut } from 'firebase/auth';
    import { useAuthStore } from '@/store/auth';
    import { auth } from '../firebase';
    import router from '@/router';

    const store = useAuthStore();

    function logOut() {
        signOut(auth);
        // Para cambiar de vista
        router.push("/home");
    }
</script>

<style lang="scss" scoped>
    .log-out-message {
        width: 500px;
        border: 2px solid $secondaryColor;
        border-radius: 15px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;

        .description-wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 5px;

            h2 {
                margin: 0;
                font-size: 30px;
            }

            p {
                margin: 0;
                color: $textColorLigther;
            }
        }

        .button-message-wrapper{
            display: flex;
            flex-direction: column;
            align-items: center;

            .p {
                margin: 0;
            }

            .form__button {
                width: 200px;
                background-color: $primaryColor;
                border: 2px solid $contrastColorDark;
                border-radius: 15px;
                padding: 10px;
                cursor: pointer;
                font-family: Avenir, Helvetica, Arial, sans-serif;
                font-weight: bold;
                font-size: 18px;
                color: $textColor;
            }

            .form__button:hover{
                background-color: white;
            }
        } 
    }
</style>