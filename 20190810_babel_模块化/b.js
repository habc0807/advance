var a = require('./a.js') // require出来的回是一个单例 
// console.log('a: ' + JSON.stringify(a) )

console.log('b: ' + a.getName())
a.setName('jingzhang')
console.log('b-2: ' + a.getName())