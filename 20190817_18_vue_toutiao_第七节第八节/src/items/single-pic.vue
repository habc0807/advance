<template>
    <div class="item single-pic">
        <div class="content">
            <span>haoshuai
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
<style scoped>
.item {
    min-height: 42px;
    padding: 16px 0;
    margin: 0 15px;
    border-bottom: 1px solid rgba(221, 221, 221, 0.6);
}

.item.single-pic {
    display: flex;
}

.single-pic .content {
    flex: 2;
    font-size: 17px;
    padding-right: 24px;
}

.single-pic img {
    width: 33%;
    display: block;
}
</style>

// 三农频道
// 养猪频道