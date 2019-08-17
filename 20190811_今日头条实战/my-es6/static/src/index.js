/** 
 * @file 管理全局的入口文件
 * @author miaomiao
 */

import { request } from './utils'
import components from './items'

class Manager {
    // constructor 接收实例化的传参 
    constructor($container) {
        this.$container = $container
    }

    init() {
        this.detectLoadData();
        this.appendData();
        // this.$container.innerHTML = 'yanxin' 
    }

    appendData() {
        request({
            url: 'http://localhost:8099/list'
        }).then(res => {
            const {
                data
            } = res
            const {
                data: items
            } = data

            items.forEach(item => {
                // console.log(item)
                const componentName = item.type
                    .replace(/^\w/g, w => w.toUpperCase())
                // 反射
                const Component = components[componentName]
                const currentComponent = new Component(item)
                const componentElement = currentComponent.constructorElement()
                console.log(componentElement)
                this.$container.appendChild(componentElement)
            })
        })
    }

    detectLoadData() {
        window.onscroll = () => {
            const offsetHeight = document.documentElement.offsetHeight
            const screenHeight = window.screen.height;
            const scrollY = window.scrollY 

            const gap = offsetHeight - screenHeight - scrollY
            console.log(gap)
            if (gap < 50) {
                // 我们就让他再加载一屏数据
                this.appendData();
            }
        }
    }

    // 这个静态方法可以做单例 
    static getInstance($container) {
        return new Manager($container); // 实例化的时候 将根元素传进去
    }
}

const $container = document.getElementById('container')
const manager = Manager.getInstance($container) 
manager.init()

