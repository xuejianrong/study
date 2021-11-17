function cloneDeep(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  let result = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = cloneDeep(obj[key])
    }
  }
  return result;
}