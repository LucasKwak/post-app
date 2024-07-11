<template>
    <div class="post-wrapper">
        <h3>{{ props.title }}</h3>
        <h4>{{ props.category }}</h4>
        <div class="p-wrapper">
            <p>{{ props.content }}</p>
        </div>
        <span class="author-name">{{ props.author }}</span>
    </div>
</template>

<script lang="ts" setup>
    import { defineProps } from 'vue';
    
    const props = defineProps(
        {
            title: {type: String, required: true},
            category: {type: String, required: true},
            content: {type: String, required: true},
            author: {type: String, required: true}
        }
    )
</script>

<style lang="scss" scoped>
    .post-wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
        border: 2px solid $secondaryColor;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 15px;
        height: 320px;
        position: relative;

        h3, h4, p{
            margin: 0;
        }

        h3 {
            font-size: 25px;
        }

        h4 {
            font-size: 19px;
        }

        .p-wrapper {
            height: 65%;
            overflow-y: scroll;
            word-break: break-word
        }

        .author-name {
            position: absolute;
            font-weight: bold;
            font-style: italic;
            bottom: 5px;
        }
    }
</style>