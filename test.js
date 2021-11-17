const { log } = console;

class Ocx {
  constructor(ref) {
    this.ref = ref
  }
}

class VideoOcx extends Ocx {
  constructor(ref) {
    super(ref)
  }
  static getInstance = getInstance()
}
function getInstance() {
  let instance = null
  return function(ref) {
    if (!instance) {
      instance = new this(ref)
    }
    return instance
  }
}

console.log(VideoOcx.getInstance('videoEl'))



function *generator() {
  yield 1;
  yield 2;
  yield 3;
  return
}
let gen = generator()
// console.log(gen.next())
for (let val of gen) {
  console.log(val)
}
let arr = [1,2,3,4]
for (let key in arr) {
  console.log(key)
}


function func() {
  let a = 10;
  var a = 1;
}
func()


function *iterator() {
  yield 1
  yield 2
  yield 3
  return 4
}

let iter = iterator()
console.log(iter.next())

const { log } = console;
let { [a = {}]: { b = 2 } } = {}
log(a);

var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];
var p = Promise.all(resolvedPromisesArray);
// immediately logging the value of p
console.log(p);

// using setTimeout we can execute code after the stack is empty
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);
});


// option 可以是渲染的配置
function test(option) {
  return new Promise((reslove, reject) => {
    // 渲染完之后调用一下resolve，例如
    new ECharts({
      // 其他一些配置

      // 渲染成功回调
      success() {
        reslove()
      }
    })
  })
}

// 这样子就可以,这里不能用forEach
async function render () {
  for (let i = 0; i < options.length; i += 1) {
    await test(options[i])
  }
}
