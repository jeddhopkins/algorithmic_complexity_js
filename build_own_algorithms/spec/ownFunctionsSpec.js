
describe('last2', function() {

  it('expect [1, 8, 33, 1, 58, 20] to return [20]', function() {
    expect(last2([1, 8, 33, 1, 58, 20])).toEqual(20);
  });
  it('expect [a, b, c] to return [c]', function() {
    expect(last2(['a', 'b', 'c'])).toEqual('c');
  });
  it('expect [hello, 22, null, true] to return [true]', function() {
    expect(last2(['hello', 22, null, true])).toEqual(true);
  });
});

describe('last3', function() {

  it('expect [1, 8, 33, 1, 58, 20] to return [20]', function() {
    expect(last3([1, 8, 33, 1, 58, 20])).toEqual(20);
  });
  it('expect [a, b, c] to return [c]', function() {
    expect(last3(['a', 'b', 'c'])).toEqual('c');
  });
  it('expect [hello, 22, null, true] to return [true]', function() {
    expect(last3(['hello', 22, null, true])).toEqual(true);
  });
});

describe('duplicates', function() {
  it('it returns duplicates when there is one set of duplicates', function () {
    expect(duplicates([2, 5, 2, 10, 1])).toEqual([2, 2])
  })

  it('it returns duplicates when there is two sets of duplicates', function () {
    expect(duplicates([2, 5, 2, 10, 10, 1, 10])).toEqual([10, 10, 10, 2, 2])
  })

  it('it returns an empty array when there are no duplicates', function () {
    expect(duplicates([2, 5, 10, 100, 1, 11])).toEqual([])
  })
})
