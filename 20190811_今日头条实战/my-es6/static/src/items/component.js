/**
 * @file 所有模版文件的基类
 * @author yuanxin 
 */

export default class Component {
    constructor(props) {
        this.props = props 
    }

    render() {
        return '<div>莱克斯顿金风科技</div>'
    }

    // 把字符串构造成DOM元素
    constructorElement(){
        // const html = this.render() // 把html拿出来
        // // $container.appendChild($content)
        // const $content = document.createElement('div')
        // $container.appendChild($content)
        // const $container = document.createDocumentFragment()

        // // 不想创建的每个组件外层都包一个div的处理
        // $container.appendChild($content)
        // $content.outerHTML = html;
        // this.el = $container.firstChild;
        // return this.el 


        const html = this.render();
        const $content = document.createElement('div');
        const $container = document.createElement('div');
        $container.appendChild($content);
        $content.outerHTML = html;
        this.el = $container.firstChild;
        return this.el;
    }
 }