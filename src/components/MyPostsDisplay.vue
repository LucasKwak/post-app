<template>
    <div class="posts-wrapper">
        <div v-if="loading" class="spinner"></div>
        <div v-if="noPosts">You haven't shared any post yet!</div>
        <PostDetails v-for="(post, index) in postArray" :key="index" :title="post.title" :category="post.category" :content="post.content" :author="post.author"></PostDetails>
    </div>
</template>

<script lang="ts" setup>
    import PostDetails from '@/components/PostDetails.vue'
    import IPost from '@/interfaces/IPost';
    import { useAuthStore } from '@/store/auth';
    import { Ref, ref, onMounted } from 'vue';

    const store = useAuthStore();
    let postArray:Ref<Array<IPost>> = ref([]);
    let noPosts:Ref<boolean> = ref(false); 
    let loading:Ref<boolean> = ref(true);

    onMounted(
        async () => {
            const querySnapshot = await store.fetchMyPosts();
                querySnapshot.forEach(
                    (doc) => {
                        let post = {
                            title: doc.data().title,
                            category: doc.data().category,
                            content: doc.data().content,
                            author: doc.data().username
                        };
                        postArray.value.push(post);
                    }
                );
                loading.value = false;
                if(postArray.value.length == 0){
                    noPosts.value = true;
                }
        }
    )
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