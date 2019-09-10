<template>
    <div>
        <div v-for="(item, key) in list" :key="key">
            <component 
                v-bind:is="item.type | formatComponentName" 
                v-bind="item.data"
            >
            </component>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import * as components from '../items'

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
    components:convertModule2Obj(components),
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
</style>