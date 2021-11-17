function a(a) {
  return a + 'a'
}
function b(b) {
  return b + 'b'
}
function c(c) {
  return c + 'c'
}

function compose(fns) {
  let combin = undefined;
  for (let i = 0; i < fns.length; i ++) {
    combin = (function(i, combin) {
      if (combin) {
        return function(args) {
          return combin(fns[i](args))
        }
      } else {
        return function(args) {
          return fns[i](args)
        }
      }
    })(i, combin)
  }
  return combin
}

let fn = compose([a, b, c])

console.log(fn(1))