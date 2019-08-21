<template>
    <div>
        <div v-for="(item, key) in list" :key="key">单图{{key}}</div>
        <!-- <div>多图</div> -->
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
    
</style>