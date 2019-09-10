/**
 * @file 所有的工具集合
 * @author miaomiao 
 */

import Vue from 'Vue'

// debounce 去抖 
export const createDebounce = (fn, delay = 1000) => {
    let timer = null
    return function debounce() {
        clearTimeout(timmer) // 打断 关键点
        timer = setTimeout(() => {
            fn && fn()
        }, delay);
    }
}

// throttle 会被调用很多次，只有第一次调用的勇士 放行通过 知道3s过去了之后 才可以进行下次调用
export const creactThrottle = (delay = 1000) => {
    let status = 'START'
    return function throttle(fn, delay = 1000) {
        if (status === 'WAITING') {
            return
        }

        status = 'WAITING'
        setTimeout(() => {
            status = 'START'
            fn & fn()
        }, delay);
    }
}

const THRESHOLD = 50

/** 
 * 导出一个Vue插件 
 * 该Vue插件 使用了mixin 用来注入了几个方法
 * 插件需要安装 需要有个install函数
*/
export default {
    install: Vue => {
        Vue.mixin({
            // data里的变量命名规范：不能使用_开头命名
            data() {
                return {
                    // 隐式被混入
                    throttle: creactThrottle(2000)
                }
            },
            created(){
                // 如果有onReachBottom callback的话 就使用onReachBottom
                if (typeof this.onReachBottom === 'function') {
                    const throttle = creactThrottle(2000)
                    window.addEventListener('scroll', () => {
                        const offsetHeight = document.documentElement.offsetHeight
                        const screenHeight = window.screen.height;
                        const scrollY = window.scrollY 
                        const gap = offsetHeight - screenHeight - scrollY

                        console.log(gap)
                        if (gap < THRESHOLD) {
                            // 我们就让他再加载一屏数据
                            throttle(()=> {
                                this.onReachBottom && this.onReachBottom()
                            }) 
                        }
                    })
                }
            },
            methods: {
                createDebounce,
                creactThrottle            
            }
        })
    }
}
