// Modules - encapsulated code

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alt')
require('./7-mind-grenade')
//when you import a module you invoke(function call) it aswell

console.log(data);

sayHi('susan')
sayHi(names.peter)
sayHi(names.deez)