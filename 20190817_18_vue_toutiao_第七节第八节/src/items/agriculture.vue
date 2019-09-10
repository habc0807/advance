<template>
    <div class="item multiple-image">
        <h3>
            农业！查猪价 猪价飙升
        </h3>
        <echarts></echarts>
        <div class="image-list">
            <label>输入地区：</label>
            <input type="text" v-model="inputVal">
            <span>地区为：{{ area }}</span>
        </div>
        <div>
            猪价：{{ price | addCount }}
        </div>
    </div>
</template>
<script>
export default {
    props: ['title', 'imageList'],
    data() {
        return {
            area: '北京',
            price: 0,
            timeout: null,
            inputVal: ''
            // debounce: 
        }
    },
    created(){
        // 这种处理方法很优雅 如果有很多地方可更改地区的话，我们就可以用watch监听area，不用在多处调用queryPigPrice方法
        this.$watch('area', area => {
            this.queryPigPrice()
        })
    },
    filters: {
        addCount(price) {
            return price + '$'
        }
    },
    watch: {
        inputVal(curVal, oldVal) {
            // 实现input连续输入，只发一次请求
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.area = curVal
            }, 300);
        },
    },
    methods: {
        inputChange(e) {
            const debounce = this.createDebounce()
            debounce(()=> {
                this.area = e.target.value
            }, 1000)
        },
        changeposition() {
            this.area = '深圳'
        },
        queryPigPrice() {
            this.price = this.price + 2.7
        }
    }
}
</script>