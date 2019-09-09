/**
 * @file 入口文件
 * @author miaomiao
 */

import Vue from 'vue'
import Main from './pages/main.vue'
import utils from './utils'

Vue.mixin({
    methods: utils
})

// new 一个vue的根元素，挂在app上
const vm = new Vue({
    el: '#app',
    render: h => h(Main)
})
<<<<<<< HEAD:20190817_18_vue_toutiao_第七节第八节/src/index.js

=======
>>>>>>> 5e1c3c40d5634d438b289f242e295703c324fe22:20190817_18_vue_toutiao/src/index.js
