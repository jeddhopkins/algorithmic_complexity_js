describe('generateArray', function() {
  it('should generate an array with 50000 objects', function() {
    generateArray(50000);
    expect(arr.length).toEqual(50000);
  })
  it('should generate an array with 0 objects', function() {
    generateArray(0);
    expect(arr.length).toEqual(0);
  })
})
