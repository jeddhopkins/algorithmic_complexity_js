function Timer() {
}

Timer.prototype.timer = function (func, arr) {
  var t1 = performance.now()
  func(arr)
  var t2 = performance.now()
  console.log(t2 - t1);
  return (t2 - t1)
};
