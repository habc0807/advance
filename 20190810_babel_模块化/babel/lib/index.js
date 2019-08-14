"use strict";

var Person = require('./person');

var other = require('./other');

console.log(other.sayMyName());
var person = new Person();
person.changeMyName('heihei');
console.log(person.sayMyName());
console.log(other.sayMyName());