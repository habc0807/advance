window.name 干啥用 刷新用

const 尽量不要定义引用类型的变量，编程习惯问题

window.name的使用场景：判断是首次打开还是刷新的页面。
window.name =  “refresh”

碎函数 vue-router里有很多 

无论任何时候不要改传入参数的引用， 不要改引用，不要改引用，函数式编程 

Object.assign({}, obj) 大量使用，为了产生一个新对象

var mergedParams = {
	…mergeParams,
	…params
}

Reduce 很重要 

let person = {
	name: ‘hello’,
	age: 18
}
let {name: name1} = person // 对name重命名 
从person里的取到name，赋值给了 name1 
Let name1 = person.name 

数组解构 按位去取
let arr = [1, 2,3 ]
Let [first, second] = arr

[first, second] = [second, first] // 变量互换

res.data.data 这种可以 {data}
render({data}) {

}

Class的实现机制 contructor super  

class  PersonClass{
	constructor (name) {
		this.name = name
	}
	sayName() {
		console.log(this.name)
	}
	static staticMethod()
}

Function PersonClass() {
	this.name = name
}
PersonClass.prototype = {
	constructor,
	sayName() {
		console.log(this.name)
	}
}
PersonClass.staticMethod= function () {}