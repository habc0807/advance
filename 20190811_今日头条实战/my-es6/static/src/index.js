/** 
 * @file 管理全局的入口文件
 * @author miaomiao
 */

import { request } from './utils'

class Manager {
    // constructor 接收实例化的传参 
    constructor($container) {
        this.$container = $container
    }

    init() {
        request({
            url: 'http://localhost:8099/list'
        }).then(res => {
            const { data}  = res 
            console.log(data)
        })
        this.$container.innerHTML = 'yanxin' 
    }

    // 这个静态方法可以做单例 
    static getInstance($container) {
        return new Manager($container); // 实例化的时候 将根元素传进去
    }
}

const $container = document.getElementById('container')
const manager = Manager.getInstance($container) 
manager.init()

