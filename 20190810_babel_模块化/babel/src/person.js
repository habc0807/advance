let _symbol = Symbol() // 用symbol 做私有变量

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