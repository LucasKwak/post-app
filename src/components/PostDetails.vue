<template>
    <div class="post-wrapper">
        <h3>Titulo</h3>
        <h4>Categoria</h4>
        <div class="p-wrapper">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nam praesentium non corrupti quam. Obcaecati corporis distinctio perspiciatis? Ullam iusto doloremque quas repudiandae possimus aut nihil, quod vero exercitationem magni. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, a! Dolorum, earum. Corporis neque delectus id facere omnis illum porro ipsum quis placeat. Fugiat, at aliquid porro saepe eos soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, reiciendis minima itaque quaerat quasi, cumque tempore ipsa nesciunt quod distinctio porro rem suscipit doloribus quo omnis, autem qui sit est?</p>
    
        </div>
    </div>
</template>

<script lang="ts" setup>

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