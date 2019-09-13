/**
 * @file 小火车呢个徐核心逻辑层
 * @author yuanxin 
 */

(function(global){
    let wx = {}
    let classMap = {}

    class Login {
        init() {
            this.uniqIndex = 0
            const firstPageUri = 'pages/index/index'
            // const firstPageUri = window.appJson.pages[0]
            this.navigatoTo(firstPageUri)
        }

        _generateUniqId() {
            return 'id' + this.uniqIndex++        
        }

        navigatoTo(uri) {
            const PageCalss = classMap[uri]
            new PageCalss(_generateUniqId(), uri)
        }
    }

    class PageBase {
        constructor(uri, id) {
            this.uri = uri
            this.id = id
            this._initData()
            global.body.appendChild(frame)
        }

        _initData() {
            this.data = JSON.parse(JSON.stringify(this.data || {}))
        }

        _render() {
            global.__bridge.createView(this.id)
                .then(frame => {
                   this.$el = frame 
                })
        }

        setData() {

        }
    }

    const createPageClass = options => {
        class Page extends PageBase {
            constructor(...args) {
                super(...args)
            }
        }

        Object.assign(Page.prototype, options)
        return Page 
    }

    const Page = (uri, options) => {
        classMap[uri] = options
    }
    global.Page = Page 
    global.login = new Login()
})(window) // 把window给屏蔽掉了