let Person = require('./person')
let other = require('./other')

console.log(other.sayMyName())

let person = new Person() 
person.changeMyName('heihei')
console.log(person.sayMyName())

console.log(other.sayMyName())


