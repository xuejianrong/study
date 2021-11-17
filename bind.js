Function.prototype.bind1 = function() {
  var args = [].slice.call(arguments)
  var obj = args.shift()
  var self = this // 之前写，忘记写这一步了
  return function Fn() {
    // 考虑到new的情况
    console.log(this)
    if (this instanceof Fn) {
      obj = this
    }
    return self.apply(obj, args.concat([].slice.call(arguments)))
  }
}

// Function.prototype.bind1 = function(context, ...args) {
//   const _this = this;
//   return function Bind(...newArgs) {
//     // 考虑是否此函数被继承
//     if (this instanceof Bind) {
//       return _this.apply(this, [...args, ...newArgs])
//     }
//     return _this.apply(context, [...args, ...newArgs])
//   }
// }

// function a() {}

// a.bind1({})

function foo(name) {
  this.name = name;
}

var obj = {}

//上下文 功能  done
var bar = foo.bind1(obj)
bar('jack')
console.log(obj.name) //'jack'

// 参数 功能   done
var tar = foo.bind1(obj, 'rose');
tar()
console.log(obj.name) //'rose'
// new 功能   error
var alice = new bar('alice')
console.log(obj.name) //alice   obj name should be 'rose'
tar.prototype.test = function(){console.log(11111)}
console.log(alice.test)
// console.log(alice.name) //undefined, alice name should be 'alice'









Function.prototype.bind = function(thisArg) {
  const args = [].slice.call(arguments, 1);
  const self = this;
  return function Fn() {
    if (this instanceof Fn) {
      thisArg = this;
    }
    return self.apply(thisArg, args.concat([].slice.call(arguments)))
  }
}

function foo(name) {
  this.name = name;
}
var obj = {}
var bar = foo.bind(obj)
bar('jack')
console.log(obj.name) //'jack'

// 参数 功能   done
var tar = foo.bind(obj, 'rose');
tar()
console.log(obj.name) //'rose'
// new 功能   error
var alice = new bar('alice')
console.log(obj.name) //alice   obj name should be 'rose'
tar.prototype.test = function(){console.log(11111)}
console.log(alice.test)


Function.prototype.bind = function(thisArg) {
  const args = [].slice.call(arguments, 1);
  const self = this;
  return function Fn() {
    if (this instanceof Fn) {
      thisArg = this;
    }
    return self.apply(thisArg, [...args, ...arguments])
  }
}