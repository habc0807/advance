/**
 * @file 入口文件
 * @author miaomiao
 */

import Vue from 'vue'
import Main from './pages/main.vue'
import plugins from './utils'

<<<<<<< HEAD:20190817_18_vue_toutiao/src/index.js
Vue.use(plugins)
=======
Vue.use(plugins) // 安装插件 插件会对Vue进行一些操作
>>>>>>> 52f5c2bb490a9ea7ae2f7d65f94cd813c39b06ae:20190817_18_vue_toutiao_第七节第八节/src/index.js

// new 一个vue的根元素，挂在app上
const vm = new Vue({
    el: '#app',
    render: h => h(Main)
})