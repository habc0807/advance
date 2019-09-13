/**
 * @file 所有的工具集合
 * @author miaomiao 
 */

import Vue from 'Vue'
import echarts from 'echarts'

// debounce 去抖 
export const createDebounce = (fn, delay = 1000) => {
    let timer = null
    return function debounce() {
        clearTimeout(timer) // 打断 关键点
        timer = setTimeout(() => {
            fn && fn()
        }, delay);
    }
}// throttle 会被调用很多次，只有第一次调用的勇士 放行通过 知道3s过去了之后 才可以进行下次调用
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

                        // console.log(gap)
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
        });

        // 自定义组件里没有操作dom 
        // 而是通过指令的形式操作的dom 
        Vue.component('echarts', {
            render(createElement) {
                return createElement(
                    'div',
                    {
                        attrs: {
                            id: this.randomId,
                        },
                        style: {
                            width: '90%',
                            height: '300px'
                        },
                        directives: [
                            {
                                name: 'echarts'
                            }
                        ]
                    }
                )
            },
            mounted() {
                // console.log(this.$el)
                // Vue 实例使用的根 DOM 元素
                //  const echartsHandler = echarts.init(this.$el) 
                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: 'ECharts 入门示例'
                    },
                    tooltip: {},
                    legend: {
                        data:['销量']
                    },
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                };

                // 使用刚指定的配置项和数据显示图表。
                this.echartsHandler.setOption(option);
            },
            // computed 没有依赖其它属性，只会被计算一次
            computed: {
                randomId() {
                    return 'echars-' + Math.floor(Math.random() * 10)
                },
            },
            methods: {
                revieverEchartsHandle(handler) {
                    this.echartsHandler = handler
                }
            }
        });

        Vue.directive('echarts', {
            // vnode 
            // 除了 el 之外，其它参数都应该是只读的，切勿进行修改。
            // 如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行。
            inserted(el, binding, vnode) {
                console.log(el)
                console.log(binding)
                console.log(vnode)
                const echartsHandler = echarts.init(el) 
                // revieverEchartsHandle是虚拟dom上的方法
                vnode.context.revieverEchartsHandle && vnode.context.revieverEchartsHandle(echartsHandler)
            }
        })
    }
}


// todolist 明天封装一个charts组件 一个charts的指令 两者配合使用