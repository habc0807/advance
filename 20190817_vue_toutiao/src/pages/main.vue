<template>
    <div>单图</div>
</template>

<script>
export default {
    // 为什么这里data是一个方法，而不是一个对象，是因为一个组件被用好几次，其它组件跟你用的是同一个组件的数据data,之间会有影响。
    // 对象引用类型 
    data() {
        return {
            nums: 1
        }
    },

    created() {
        fetch('http://localhost:8099/list') 
            .then(res => {
                res.json()
            })
            .then({data} => {
                console.log('res: '+ data)
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