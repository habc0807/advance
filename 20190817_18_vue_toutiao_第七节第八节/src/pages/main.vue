<template>
    <div>
        <tab>
            <template v-slot:header>
                <span>推荐</span>
                <span>热点</span>
                <span>农业</span>
                <span>视频</span>
                <span>娱乐</span>
            </template>
            <template v-slot:content>
                <div v-for="(item, key) in list" :key="key">
                    <component 
                        v-bind:is="item.type | formatComponentName" 
                        v-bind="item.data"
                    >
                    </component>
                </div>
            </template>
        </tab>
        
    </div>
</template>

<script>
import axios from 'axios'
import * as components from '../items'
import tab from '../components/tab.vue'


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
        }
    },
    components:{
        tab,
        ...convertModule2Obj(components),
        Agriculture: () => (import('../items/agriculture.vue')).then(res => {
                console.log(res)
                console.log(res)
                console.log(res)
            })
    },
    filters: {
        formatComponentName(componentName) {
            return componentName.replace(/^\w/g, name => name.toUpperCase())
        }
    },
    created() {
        this.getDataHandle()
    },

    methods: {
        // 美滋滋
        onReachBottom(){
            this.getDataHandle();
        },
        getDataHandle(){
            axios('http://localhost:8099/list?tab=singlePic') 
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
</style>