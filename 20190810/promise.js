(function(global) {

    function Promise(processor) {
        this._status = 'pending'

        processor(
            res => {
                this._resolve(res)
            },
            () => {
                this._status = 'reject'
            }
        )
    }

    Promise.prototype = {
        _taskCallback: function (value, processor, next) {
            // then 执行之后的 preResult 返回值, 是下一个then韩丽的接收参数
            var preResult = processor(value)
            if(preResult instanceof Promise) {
                preResult
                    .then(res => this.next._resolve(res))
                // preResult
                //     .catch(res => next._reject(res))
                // then里返回的是promise, 需要返回该promise里的resolve里的值 
                // 如又继续then了，就返回then里的返回值 行程递归了
                return;
            }
            return this.next._resolve(preResult)
        },

        then: function (onFullfilled) {
            this.onFullfilled = onFullfilled

            // 把Promise里的resolve, reject给导出去了 想当于递归 每个then都返回一个新的promise 
            this.next = new Promise((resolve, reject) => {})

            if (this._status === 'fulfilled') {
                this._taskCallback(
                    this.currentValue, 
                    this.onFullfilled,
                    this.next 
                )
            }

            // then之后的返回值 是一个新的promise, 后面还能继续then
            return this.next;
        },

        _resolve: function _resolve (res) {
            this._status = 'fulfilled'
            this.currentValue = res 

            // 加这个判断是防止 then上的callback还没有挂上去 就执行 会报错
            if(this.onFullfilled) {
                this._taskCallback(
                    this.currentValue,
                    this.onFullfilled,
                    this.next
                )
            }
        }
    }

    global.Promise = Promise
})(window)