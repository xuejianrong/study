function dfs(root) {
  console.log(root.val)
  root.children.forEach(dfs)
}

function bfs(root) {
  const q = [root]
  while (q.length) {
    let top = q.shift()
    console.log(top.val)
    q.forEach(child => {
      q.push(child)
    })
  }
}