/**
 * @file vue-router.js
 * @author gaobingyan
 * vue-router 路由变化了就改视图
 * 复杂点：嵌套路由 多次实例化router
 */

 /**
  * 原vue-router的更新原理
  * data() {
  *     _route: null
  * },
  * router,
  * _route变动的时候，就会出发vue的响应式绑定处理，进行更新。
  */

//  Main >> router-view >> component >> subcomponent >> router-view 
// #root(router) >> Main(this.$rootRouter) >> Tab(this.$MainRouter) 实际上利用了vue的递归式组件
// 可能会出现问题的地方是：有两个地方定义了router,就乱了懵了
export default class VueRouter {
    constructor(options) {
        // 记录一下配置项 
        this.mode = options.mode;
        this.routes = options.routes;
        // 工具  
        this.history = new History(); // VueRouter实例化的时候 同时实例化History

        // 监听路由的改变，刷新页面 需要每次刷新的时候，从新找下新的router 找完需要更新的是其它组件 所以这块的处理要放到外部处理
        this.history.listen((newHash) => {
            console.log('vm', this.vm)
            // vm 是整个vm实例 
            // vm.$forceUpdate() 迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。
            // vue 发现你的props没有变的化，就决绝刷新 
            // 但是组件没从新渲染 是因为组件里的props没有变化 vue做来优化 没有重新渲染 
            this.vm.$forceUpdate() 
            console.log('newHash')
        })
    }

    push(path){
        this.history.push(path)
    }

    static install(Vue, options) {

        Vue.mixin({
            // 所有的组件都走这个生命周期，来自查一下，查好挂上 ，简称自查，给大佬递我，把自己递给大佬。
            created() {
                // 如果当前的组件有router 就可以获取当前实例挂在router上 这是一种反向的依赖注入 
                if(this.$options.router) {
                    // 把自己挂到router上 方便调用 挂是为了使用vm.$forceUpdate() 
                    this.$options.router.vm = this; // vm.$data vm.$props vm.$options vm.$el 实例属性
                    this.$router = this.$options.router;
                } else {
                    this.$router = this.$parent.$router 
                }
            }
        });

        // router-view的本质是一个动态组件 要渲染是路由对应的组件 定义一个router-view的组件
        Vue.component('router-view', {
            // 函数式组件 使组件无状态和无实例，既没有data响应式数据,没有this执行上下文，他们用一个简单的 render 函数返回虚拟节点使他们更容易渲染。
            functional: true, 

            // 为了弥补缺少的实例 提供第二个函数作为上下文
            render(createElement, context) {
                const currentHash = location.hash
                // props 提供所有prop的对象  parent 对父亲组件的引用
                const { props, children, parent } = context;
                // this.$parent父实例 $options是vue实例的初始化选项 
                const router = parent.$router;
                 
                const currentRoute = matcher(currentHash, router.routes)
                
                
                console.log('$currentRoute:', currentRoute)

                // 拿到当前路径下🇬应该对应的component 进行渲染
                return createElement(currentRoute.component)
            }
        });

        Vue.component('router-link', {
            render(createElement) {
                return createElement(
                    'span', 
                    {
                        on: {
                            click: this.clicking 
                        }
                    },
                    this.$slots.default
                )
            },
            methods: {
                clicking() {
                    // window.history.back();
                    this.$parent.$router.back()
                }
            }
        })
    }
}

/**
 * 
 * @param {*} path 当前的path
 * @param {*} routesConfig 所有的routers
 */
const matcher = (path, routesConfig) => {
    // find() 方法在数组中寻找符合条件的元素，找到第一个就返回，找不到返回undefined
    return routesConfig
        .find(route => {
            // location.hash里有#符号，需要将#拿掉
            return route.path === path.replace(/^#/, '');
        });
} 


/**
 * History 类
 * listen function 监听路由变化
 * pash function 添加新路由
 */
class History {
    // hash变了就通知一下
    listen(callback) {
        window.addEventListener('hashchange', () => {
            callback && callback(window.location.hash);
        })
    }

    // 改hash
    push(path) {
        // 这里需要区分history 和 hash的处理
        // this.$router.push('/setting')
        // window.location.hash = '#/setting'
        window.location.hash = '#' + path;      
    }
}