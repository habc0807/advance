
export default class VueRouter {
    constructor(options) {
        this.routes = options.routes
    }

    static install(Vue, options) {

        // vue 
        Vue.component('router-view', {
            render(createElement) {
                const 
                this.$parent.$options.router.routes.find(route => {
                    return route.path === l
                })
                return createElement('div')
            }
        })
    }
}