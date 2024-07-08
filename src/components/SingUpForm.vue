<template>
    <form class="sing-up-form">
        <div class="description-wrapper">
            <h2>Create an Account</h2>
            <p>Enter your details below to get started.</p>
        </div>

        <div class="inputs-wrapper">
            <div class="input-wrapper">
                <label class="sing-up-form__label" for="inputName">Name</label>
                <input class="sing-up-form__input" type="text" id="inputName" placeholder="Lucas">
            </div>
            <div class="input-wrapper">
                <label class="sing-up-form__label" for="inputLastName">Last name</label>
                <input class="sing-up-form__input" type="text" id="inputLastName" placeholder="Kwak">
            </div>
            <div class="input-wrapper">
                <label class="sing-up-form__label" for="inputEmail">Email</label>
                <input class="sing-up-form__input" type="text" id="inputEmail" placeholder="email@gmail.com">
            </div>
            <div class="input-wrapper">
                <label class="sing-up-form__label" for="inputPassword">Password</label>
                <input class="sing-up-form__input" type="password" id="inputPassword">
            </div>
        </div>
        <button class="form__button" type="submit">Create Account</button>
    </form>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
    .sing-up-form {
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
            }

            p {
                margin: 0;
                color: $textColorLigther;
            }
        }

        .inputs-wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 25px;

            .input-wrapper {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 10px;

                .sing-up-form__label {
                    width: 100px;
                    font-weight: bold;
                }

                .sing-up-form__input {
                    font-family: Avenir, Helvetica, Arial, sans-serif;
                    height: 30px;
                    border: 2px solid $secondaryColor;
                    border-radius: 5px;
                }

                .sing-up-form__input:focus {
                    outline: 2px solid $primaryColor;
                    outline-offset: 3px;
                }
            }
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
</style>