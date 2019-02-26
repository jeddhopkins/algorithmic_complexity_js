describe('last', function() {

  it('expect [1, 8, 33, 1, 58, 20] to return [20]', function() {
    expect(last([1, 8, 33, 1, 58, 20])).toEqual(20);
  });
  it('expect [a, b, c] to return [c]', function() {
    expect(last(['a', 'b', 'c'])).toEqual('c');
  });
  it('expect [hello, 22, null, true] to return [true]', function() {
    expect(last(['hello', 22, null, true])).toEqual(true);
  });
});
