<template>
    <div>
        <div v-for="(item, key) in list" :key="key">
            <SinglePic v-if="item.type == 'singlePic'" v-bind="item.data"></SinglePic>
            <Agriculture v-else-if="item.type === 'agriculture'" v-bind="item.data"></Agriculture>
            <MultiplePic v-else v-bind="item.data"></MultiplePic>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import MultiplePic from '../items/multiple-pic.vue'
import SinglePic from '../items/single-pic.vue'
import Agriculture from '../items/agriculture.vue'

export default {
    data() {
        return {
            list: [],
        }
    },
    components: {
        MultiplePic,
        SinglePic,
        Agriculture
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