<template>
    <div class="item multiple-image">
        <h3>
            {{ title }}
        </h3>
        <div class="image-list">
            可爱
            <img v-for="(image, index) in imageList" :key="index" v-bind:src="image" alt="">
        </div>
    </div>
</template>
<script>
export default {
    props: ['title', 'imageList']
}
</script>
<style scoped>
.item {
    min-height: 42px;
    padding: 16px 0;
    margin: 0 15px;
    border-bottom: 1px solid rgba(221, 221, 221, 0.6);
}
.item.multiple-image h3 {
    font-size: 17px;
}

.item.multiple-image .image-list img {
    width: 33%;
}
</style>