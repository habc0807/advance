/**
 * @file 所有的工具集合
 * @author tiantian 
 */

 import vue from 'Vue'
 import echarts from 'echarts'

// throttle 会被调用很多次，只有第一次调用的勇士 放行通过 知道3s过去了之后 才可以进行下次调用
const creactThrottle = (delay = 1000) => {
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

// debounce 去抖 
const createDebounce = (fn, delay = 1000) => {
    let timer = null
    return function debounce() {
        clearTimeout(timmer) // 打断 关键点
        timer = setTimeout(() => {
            fn && fn()
        }, delay);
    }
}

const THEESHOLD = 50

export default {
    install: Vue => {
        Vue.mixin({
            data() {
                return {}
            },

            created() {
                if(typeof this.onReachBottom === 'function') {
                    let throttle = creactThrottle(1000)
                    window.addEventListener('scroll', () => {
                        const offsetHeight = document.documentElement.offsetHeight;
                        const screeHeight = window.screen.height;
                        const scrollY = window.scrollY;
                        const gap = offsetHeight - screeHeight - scrollY

                        if (gap < THEESHOLD) {
                            throttle(() => {
                                this.onReachBottom && this.onReachBottom()
                            })
                        }
                    })
                }
            },

            methods: {
                createDebounce
            },
        });

        Vue.component('echarts', {
            render(createElement) {
                return createElement(
                    'div',
                    {
                        attr: {
                            id: this.randomId
                        },
                        style: {
                            width: '100px',
                            height: '100px'
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
                // const echartsHandler = echars.init(this.$el);

                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: 'EChart 入门示例'
                    },
                    tooltip: {},
                    legend: {
                        data: ['销量']
                    },
                    xAxis: {
                        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                }
                this.echartsHandler.setOption(option);
            },
            // computed会被缓存只算一次 id是一次性的不会变来变去
            computed: {
                randomId() {
                    return 'echarts-' + (Math.random() * 10)
                },

                revieverEchartsHandle(handle) {
                    this.echartsHandle = handle 
                }
            },
        });

        Vue.directive('echarts', {
            inserted(el, vnode) {
                const echartsHandler = echarts.init(el)
                vnode.context.revieverEchartsHandle && vnode.context.revieverEchartsHandle
            }
        })
    },
}
