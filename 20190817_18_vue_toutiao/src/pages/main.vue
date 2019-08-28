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
import * as components from '../items'


// throttle 会被调用很多次，只有第一次调用的勇士 放行通过 知道3s过去了之后 才可以进行下次调用
const creactThrottle = (delay = 1000) => {
    let status = 'START'
    return function throttle(fn, delay = 1000) {
        if(status === 'WAITING') {
            return 
        }
        
        status = 'WAITING'
        setTimeout(() => {
            status = 'START'
            fn & fn() 
        }, delay);
    }
}

const convertModule2Obj = moduleObj => {
    let result = {}
    for (let moduleName in moduleObj) {
        result[moduleName] = moduleObj[moduleName]
    }
    return result 
}


export default {
    data() {
        return {
            list: [],
            throttle: creactThrottle()
        }
    },
    components:convertModule2Obj(components),
    created() {
        this.getDataHandle()
        window.onscroll = () => {
            const offsetHeight = document.documentElement.offsetHeight
            const screenHeight = window.screen.height;
            const scrollY = window.scrollY 

            const gap = offsetHeight - screenHeight - scrollY
            console.log(gap)
            if (gap < 50) {
                // 我们就让他再加载一屏数据
                const throttle = this.throttle
                let _this = this
                throttle(()=> {
                    _this.appendData();
                }, 3e3) // 科学技术法 1e3 = 1000 3e3 = 3000
            }
        }
    },

    methods: {
        getDataHandle(){
            axios('http://localhost:8099/list') 
                .then(({data}) => {
                    const {data: listData} = data
                    this.list = listData
                    console.log(listData)
                })
        },
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