<template>
    <div class="item multiple-image">
        <h3>
            农业！查猪价
        </h3>
        <div class="image-list">
            <label>输入地区：</label>
            <input type="text" v-on:input="inputChange">
            <span>地区为：{{ area }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: ['title', 'imageList'],
    data() {
        return {
            area: '北京'
        }
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value)
            this.area = e.target.value
        }
    }
}
</script>