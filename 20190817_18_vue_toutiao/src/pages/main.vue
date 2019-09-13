<template>
    <div>
        <tab>
            <template v-slot:header>
                <div>
                    <span>推荐</span>
                    <span>热点</span>
                    <span>农业</span>
                </div>
            </template>

            <template v-slot:content>
                <div v-for="(item, key) in list" :key="key">
                    <component 
                        :is="item.type | formatComponentName" 
                        v-bind="item.data"
                    ></component>
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
    components: {
        ...convertModule2Obj(components),
        tab
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
        getDataHandle(){
            axios('http://localhost:8099/list') 
                .then(({data}) => {
                    const {data: listData} = data
                    this.list = [...this.list, ...listData]
                    console.log(listData)
                })
        },
        changeName() {
            this.nums = 5
        },
        onReachBottom() {
            console.log('加载')
            this.getDataHandle();
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