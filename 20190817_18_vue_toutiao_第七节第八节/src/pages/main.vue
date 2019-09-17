<template>
    <article>
        <keep-alive>
            <div>
                <component
                    v-bind:is="page"
                    v-bind:tabs="tabs"
                    v-bind:curTab.sync="curTab"
                    v-on:switchTab="switchTab"
                    v-on:more="showMoreTab"
                    >
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
                </component>
            </div>
        </keep-alive>
    </article>
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
            tabs: [],
            curTab: 1
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

        for(let name in tabs) {
            result[name] = {
                label: tabs[name],
                index: 0,
                list: []
            }
        }
        return result;

        return {
            content: '这是一个vue的页面',
            listData: [],
            page: 'tab',
            curTab: 'agriculture',
            tabs: constructTabs(TABS)
        }
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
        },
        switchTab(tabName) {
            this.curTab = tabName;
            if(!this.tabs[tabName].list.length) {
                this.getListData(tabName)
                    .then(listData => {
                        this.setTabsData(this.curTab, {
                            list: listData
                        })
                    })
            }
        },
        showMoreTab(event) {
            if(event === 'hide') {
                this.page = 'tab'
            }
            else {
                this.page = 'setting'
            }
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