console.log('hello ')
import { request } from './utils'
class Manage {
    constructor() {
        this.$container = $container
    }

    init() {
        request({
            url: '/list'
        }).then(res => {
            console.log('res')
        })
    }

    static getInstance() {
        return new Manage($container) 
    }
}

const $container = document.getElementById('container')
const manager = Manager.getInstance($container);
manager.init()