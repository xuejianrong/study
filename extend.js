// 原型继承
class Parent {
  constructor() {
    this.name = 'kevin'
  }
}

Parent.getName = function() {
  return this.name
}

class Child {}

Child.prototype = new Parent()

// 借用构造函数(经典继承)
function Parent() {
  this.name = ['kevin', 'emo']
}

function Child() {
  Parent.call(this)
}

// 组合继承
function Parent() {
  this.name = 'kevin'
}
function Child() {
  Parent.call(this)
}
Parent.prototype.getName = function () {
  return this.name
}
Child.prototype = new Parent()
Child.prototype.contructor = Child

// 原型式继承
function createObj(object) {
  function Fn() {}
  Fn.prototype = object
  return new Fn()
}

// 寄生式继承
function createObj(object) {
  var clone = Object.create(object)
  clone.getName = function() {
    return this.name
  }
  return clone
}
// 寄生组合式继承
function Parent (name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}
Parent.prototype.getName = function () {
  console.log(this.name)
}
function Child (name, age) {
  Parent.call(this, name);
  this.age = age;
}
function createObj(object) {
  function Fn() {}
  Fn.prototype = object
  return new Fn()
}
function prototype(child, parent) {
  var proto = createObj(parent.prototype)
  child.prototype = proto
}
prototype(Child, Parent)
let c1 = new Child('jr', 30)
c1.getName()
console.log(c1 instanceof Child)

