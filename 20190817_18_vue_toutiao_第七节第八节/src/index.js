/**
 * @file 入口文件
 * @author miaomiao
 */

import Vue from 'vue'
import Main from './pages/main.vue'
import plugins from './utils'

Vue.use(plugins) // 安装插件 插件会对Vue进行一些操作

// new 一个vue的根元素，挂在app上
const vm = new Vue({
    el: '#app',
    render: h => h(Main)
})