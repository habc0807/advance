var a = require('./a.js') // require出来的回是一个单例 
var b = require('./b.js')
// console.log('a: ' + JSON.stringify(a) )
// a.setName('heihei')
console.log('a: ' + a.getName()) 



define('module-name', [], function(m1, m2) {
    class items {

    }
    return items 
})


var a = require(['a'], function() {
    
})
