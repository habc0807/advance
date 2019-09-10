<template>
    <div class="item multiple-image">
        <h3>
            农业！查猪价 猪价飙升
        </h3>
        <div class="image-list">
            <label>输入地区：</label>
            <input type="text" v-on:input="inputChange">
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
            debounce: this.createDebounce()
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
    methods: {
        inputChange(e) {
            const debounce = this.debounce
            console.log(debounce)
            debounce(()=> {
                console.log(e.target.value)
                this.area = e.target.value
            }, 3000)
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