

// 利用工场函数的特性 每次调用都返回一个新对象 新对象会从新分配新的内存空间 对象里的值互不影响
function Person () {
    var _name = ''
    var PersonProto = {
        sayMyName() {
            console.log(_name)
        },
        changeMyName(name) {
            _name = name 
        }
    }

    return PersonProto
}

module.exports = Person