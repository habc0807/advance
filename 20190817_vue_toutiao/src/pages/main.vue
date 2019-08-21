<template>
    <div>
        <div v-for="(item, key) in list" :key="key">
            <!-- 单图 -->
            <div v-if="item.type == 'singlePic'" class="item single-pic">
                <div class="content">
                    <span>
                        {{ item.data.title }}
                    </span>
                </div>
                <img v-bind:src="item.data.imageList[0]" alt="">
            </div>

            <!-- 组件 -->
            <div v-else-if="item.type == 'multiplePic'" class="item multiple-image">
                <h3>{{ item.data.title }}</h3>
                <div class="image-list">
                    <img v-for="(image, index) in item.data.imageList" :key="index" v-bind:src="image" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            list: [],
        }
    },

    created() {
        axios('http://localhost:8099/list') 
            .then(({data}) => {
                const {data: listData} = data
                this.list = listData
                console.log(listData)
            })
    },

    methods: {
        changeName() {
            this.nums = 5
        } 
    },
}
</script>
<style lang="css">
body {
    margin: 0;
    padding: 0;
}

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

.item.multiple-image h3 {
    font-size: 17px;
}

.item.multiple-image .image-list img {
    width: 33%;
}

</style>