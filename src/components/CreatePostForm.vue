<template>
    <div class="create-post-form-wrapper">
        <form class="create-post-form">
            <div class="description-wrapper">
                <h2>Create a Post</h2>
                <p>Write a post about a topic and shared it with the rest of the users!</p>
            </div>

            <div class="inputs-wrapper">
                <div class="input-wrapper">
                    <label class="create-post-form__label" for="inputTitle">Title</label>
                    <input class="create-post-form__input" type="text" id="inputTitle" placeholder="Some title" v-model="title">
                </div>
                <div class="input-wrapper">
                    <label class="create-post-form__label" for="inputCategory">Category</label>
                    <select class="create-post-form__input" id="inputCategory" v-model="category">
                        <option value="Sports">Sports</option>
                        <option value="Cinema">Cinema</option>
                        <option value="Books">Books</option>
                        <option value="Science">Science</option>
                        <option value="Tech">Tech</option>
                        <option value="Traveling">Traveling</option>
                        <option value="Politics">Politics</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Fitness">Fitness</option>
                    </select>
                </div>
                <div class="input-wrapper">
                    <label class="create-post-form__label" for="inputContent">Content</label>
                    <textarea class="create-post-form__input create-post-form__text-area"  id="inputContent" v-model="content"></textarea>
                </div>
            </div>
            <button class="form__button" type="submit" @click.prevent="sharePost">Share post</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
    import { Ref, ref } from "vue";
    import { useAuthStore } from '../store/auth';

    const store = useAuthStore();

    let title:Ref<string> = ref('');
    let category:Ref<string> = ref('');
    let content:Ref<string> = ref('');

    function sharePost() {
        store.createPost(title.value, category.value, content.value);
        title.value = '';
        category.value = '';
        content.value = '';
    }
</script>

<style lang="scss" scoped>
    .create-post-form-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .create-post-form {
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

                .create-post-form__label {
                    width: 100px;
                    font-weight: bold;
                }

                .create-post-form__input {
                    font-family: Avenir, Helvetica, Arial, sans-serif;
                    height: 30px;
                    border: 2px solid $secondaryColor;
                    border-radius: 5px;
                }

                .create-post-form__input:focus {
                    outline: 2px solid $primaryColor;
                    outline-offset: 3px;
                }

                .create-post-form__text-area {
                    resize: none;
                    height: 100px;
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