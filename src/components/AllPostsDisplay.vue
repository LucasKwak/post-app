<template>
    <div class="posts-wrapper">
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
        <PostDetails></PostDetails>
    </div>
</template>

<script lang="ts" setup>
    import PostDetails from '@/components/PostDetails.vue'
</script>

<style lang="scss" scoped>
    .posts-wrapper {
        height: 650px;
        overflow-y: scroll;
        border: 2px solid $secondaryColor;
        border-radius: 15px;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
        box-sizing: border-box;
        padding: 20px;
    }
</style>