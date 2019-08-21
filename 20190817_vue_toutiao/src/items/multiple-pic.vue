<template>
    <div class="item multiple-image">
        <h3>
            {{ title }}
        </h3>
        <div class="image-list">
            <img v-for="(image, index) in imageList" :key="index" v-bind:src="image" alt="">
        </div>
    </div>
</template>
<script>
export default {
    props: ['title', 'imageList']
}
</script>