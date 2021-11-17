function ajax(method, path, fn) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, path, false);
  xhr.onreadystatechange = function(res) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        fn(xhr.responseText)
      }
    }
  }
  xhr.send(null)
}