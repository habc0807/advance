/**
 * @file 小火车呢个徐核心逻辑层
 */

class Bridge {
    createView(id) {
        new Promise(resolve => {
            let frame = document.createElement('iframe')
            frame.className = 'view'
            frame.src = './view.html'
            frame.id = id
            frame.onload = () => resolve(frame)
            document.body.appendChild(frame)
        });
    }

    postMessage(id, params) {
        const target = document.querySelector('#' + id);
        target.contentWindow.postMessage(params);
    }

    onMessage(callback) {
        window.addEventListener('message', function (event) {
            callback && callback();
        });
    }
}


window.__bridge = new Bridge()