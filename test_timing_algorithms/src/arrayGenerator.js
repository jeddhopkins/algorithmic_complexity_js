function generateArray(length) {
  arr = []
  for (var i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 100))
  }
  return arr
}
