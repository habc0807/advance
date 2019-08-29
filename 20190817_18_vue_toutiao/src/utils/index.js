/**
 * @file 所有的工具集合
 * @author tiantian 
 */

 import vue from 'Vue'

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

export default {
    creactThrottle,
    createDebounce
}
