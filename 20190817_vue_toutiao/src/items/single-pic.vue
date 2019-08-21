<template>
    <div class="item single-pic">
        <div class="content">
            <span>
                {{ title }}
            </span>
        </div>
        <img v-bind:src="imgUrl" alt="">
    </div>
</template>
<script>
export default {
    props: ['title', 'imageList'],
    computed: {
        imgUrl() {
            // 依赖了其它数据 
            return this.imageList[0]
        }
    },
    methods: {}
        
}
</script>

// 三农频道
// 养猪频道