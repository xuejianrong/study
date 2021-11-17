class JQuery {
  constructor(selector) {
    this.selector = selector;
    const results = document.querySelectorAll(selector);
    let length = results.length;
    for (let i = 0; i < length; i ++) {
      this[i] = results[i]
    }
    this.length = length;
  }
  get(i) {
    return this[i]
  }
  each(fn) {
    for (let i = 0; i < this.length; i ++) {
      fn(this[i])
    }
  }
  on(type, fn) {
    this.each((e) => {
      e.addEventListener(type, fn)
    })
  }
}
// 扩展
JQuery.prototype.meMethod = function() {}

// 继承
class MyJQuery extends JQuery {
  constructor(selector) {
    super(selector)
  }
  meMethod() {}
}



class JQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector);
    let length = result.length;
    for (let i = 0; i < length; i ++) {
      this[i] = result[i]
    }

    this.length = length;
    this.selector = selector;
  }
  get(i) {
    return this[i]
  }
  each(fn) {
    for (let i = 0; i < this.length; i ++) {
      fn(this[i])
    }
  }
  on(type, fn) {
    this.each((elem) => {
      elem.addEventListener(type, fn)
    })
  }
}

// 扩展
JQuery.prototype.myMethod = function() {}

// 继承
class MyJQuery extends JQuery {
  constructor(selector) {
    super(selector)
  }
  myMethod() {}
}