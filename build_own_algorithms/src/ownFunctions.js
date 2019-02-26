var newArr = [];

function last(arr) {
  return arr.pop()
}

function last2(arr) {
  return arr.splice(-1)[0];
}

function last3(arr) {
  return arr[arr.length - 1];
}


function reverse(arr) {
 return arr.reverse()
}

function reverse2(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
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

function reverse3(arr) {

}

function reverse4(arr) {

}

function sort(arr) {

}

function sort2(arr) {

}

function shuffle(arr) {

}

function shuffle2(arr) {

}
