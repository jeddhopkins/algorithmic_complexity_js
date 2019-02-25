function reversing(arr) {
  return arr.reverse();
};

arr = []
for (var i = 0; i < 50001; i++) {
  arr.push(Math.floor(Math.random() * Math.floor(100)))
}

var t1 = performance.now()
reversing(arr)
var t2 = performance.now()

console.log((t2 - t1).toFixed(5));
