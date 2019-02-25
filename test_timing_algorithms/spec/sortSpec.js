describe('sorting', function() {

  it('expects [4, 3, 1] to equal [1, 3, 4]', function() {
    expect(sorting([4, 3, 1])).toEqual([1, 3, 4])
  });
  it('expects [e, d, c, b, a] to equal [a, b, c, d, e]', function() {
    expect(sorting(['e', 'd', 'c', 'b', 'a'])).toEqual(['a', 'b', 'c', 'd', 'e'])
  });
});
