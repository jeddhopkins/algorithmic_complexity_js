function sorting(arr) {
  return arr.sort();
};

arr = []
for (var i = 0; i < 50001; i++) {
  arr.push(Math.floor(Math.random() * Math.floor(100)))
}

var t1 = performance.now()
sorting(arr)
var t2 = performance.now()

console.log((t2 - t1).toFixed(5));
