class Promise {
  static PADDING = 'PADDING'
  static FULFILLED = 'FULFILLED'
  static REJECTED = 'REJECTED'
  constructor(executor) {
    this.status = Promise.PADDING
    this.result = undefined
    this.reason = undefined
    this.callbacks = []
    let resolve = (result) => {
      if (this.status !== Promise.PADDING) return
      this.result = result
      this.status = Promise.FULFILLED
      this.callbacks.forEach(cb => {
        this.handler(cb)
      })
    }
    let reject = (reason) => {
      if (this.status !== Promise.PADDING) return
      this.reason = reason
      this.status = Promise.REJECTED
      this.callbacks.forEach(cb => {
        this.handler(cb)
      })
    }
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  then(onResolved, onRejected) {
    return new Promise((nextResolve, nextReject) => {
      this.handler({
        nextResolve,
        nextReject,
        onResolved,
        onRejected
      })
    })
  }
  handler(cb) {
    const { onResolved, onRejected, nextResolve, nextReject } = cb

    if (this.status === Promise.PADDING) {
      this.callbacks.push(cb)
    }
    try {
      if (this.status === Promise.FULFILLED) {
        let newResult = onResolved && onResolved(this.result)
        nextResolve(newResult)
      }
      if (this.status === Promise.REJECTED) {
        let nextReason = onRejected && onRejected(this.reason)
        nextResolve(nextReason)
      }
    } catch (err) {
      nextReject(err)
    }
  }
}

new Promise((resolve, reject) => {
  console.log(1)
  setTimeout(() => {
    resolve(111)
    // reject(222)
  })
}).then((res) => {
  console.log(2, res)
  throw new Error(333)
}, (err) => {
  console.log(3, err)
  return 444
}).then((res) => {
  console.log(4, res)
}, (err) => {
  console.log(5, err)
})
