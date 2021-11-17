class Promise {
  static padding = 'padding'
  static fulfilled = 'fulfilled'
  static rejected = 'rejected'
  constructor(executor) {
    this.status = Promise.padding
    this.value = undefined
    this.reason = undefined
    this.callbacks = []
    const resolve = (value) => {
      if (this.status !== Promise.padding) return
      this.status = Promise.fulfilled
      this.value = value
      this.callbacks.forEach(cb => {
        this.handle(cb)
      })
    }
    const reject = (reason) => {
      if (this.status !== Promise.padding) return
      this.status = Promise.rejected
      this.reason = reason
      this.callbacks.forEach(cb => {
        this.handle(cb)
      })
    }
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(this.reason)
    }
  }
  then(onFulfilled, onRejected) {
    return new Promise((nextResolve, nextReject) => {
      let cb = { onFulfilled, onRejected, nextResolve, nextReject }
      if (this.status === Promise.padding) {
        this.callbacks.push(cb)
      }
      this.handle(cb)
    })
  }
  handle(cb) {
    const { onFulfilled, onRejected, nextResolve, nextReject } = cb
    try {
      if (this.status === Promise.fulfilled) {
        let nextValue = onFulfilled && onFulfilled(this.value)
        nextResolve(nextValue)
      }
      if (this.status === Promise.rejected) {
        let nextReason = onRejected && onRejected(this.reason)
        nextResolve(nextReason)
      }
    } catch (err) {
      nextReject(err)
    }
  }
}

new Promise((resolve, reject) => {
  console.log('start')
  setTimeout(() => {
    resolve(111)
    resolve(333)
    // reject(222)
  })
}).then(res => {
  console.log(2, res)
  return 555
}, (err) => {
  console.log(3, err)
}).then(res => {
  console.log(4, res)
})