async function a() {
  return {
    b: 1
  }
}

!(async function() {
  let o = await a()
  console.log(o)
})()