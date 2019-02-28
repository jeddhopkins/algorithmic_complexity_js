function last(arr) {
  return arr.pop();
};

function last2(arr) {
  return arr.splice(-1)[0];
}

function last3(arr) {
  return arr[arr.length - 1];
}

function reversing(arr) {
  return arr.reverse();
};

function reversing2(arr) {
  var newArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function reversing3(arr) {
  var j = arr.length - 1
  for (var i = 0; i < arr.length; i++) {
    if (i >= j) {
      break
    }
    var obj = arr[i]
    arr[i] = arr[j]
    arr[j] = obj
    j--
  }
  return arr
}

function reversing4(arr) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.pop());
  }
  return newArr
}

function sorting(arr) {
  return arr.sort();
};


function shuffle(arr) {
  var j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
  }
  return arr;
}

function duplicates(array) {
  array.sort()
  result = []
  while ( array.length != 0 ) {
    var count = 1
    var i = 0
    var j = 1
    while (array[i] === array[j]) {
      count += 1
      j += 1
    }
    for (var i = 0; i < count; i++) {
      if ( count > 1 ) { result.push(array[i]) }
    }
    array.splice(0, count)
  }
  return result
}
