let _symbol = Symbol() // 用symbol 做key  做私有变量 外部拿不到这个引用

class Person {
    constructor() {
        this[_symbol] = 'heihei'
    }
    sayMyName() {
        console.log(this[_symbol])
    }
    
    changeMyName(name) {
        this[_symbol] = name 
    }
}

module.exports = Person