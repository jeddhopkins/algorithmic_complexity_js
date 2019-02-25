describe('reversing', function() {

  it('expects [1, 2, 3, 4, 5] to equal [5, 4, 3, 2, 1]', function() {
    expect(reversing([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1])
  });
  it('expects [a, b, c, d, e] to equal [e, d, c, b, a]', function() {
    expect(reversing(['a', 'b', 'c', 'd', 'e'])).toEqual(['e', 'd', 'c', 'b', 'a'])
  });
  it('expects [22, null, hi] to equal [hi, null, 22]', function() {
    expect(reversing([22, null, 'hi'])).toEqual(['hi', null, 22])
  });
});
