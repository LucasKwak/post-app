<template>
    <div class="post-wrapper">
        <h3>{{ props.title }}</h3>
        <h4>{{ props.category }}</h4>
        <div class="p-wrapper">
            <p>{{ props.content }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { defineProps } from 'vue';
    
    const props = defineProps(
        {
            title: {type: String, required: true},
            category: {type: String, required: true},
            content: {type: String, required: true}
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
        h3, h4, p{
            margin: 0;
        }

        .p-wrapper {
            overflow-y: scroll;
        }
    }
</style>