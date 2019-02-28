describe('generateNumberArray', function() {
  it('should generate a number', function() {
    spyOn(Math, 'random').and.returnValue(0.2);
    expect(generateNumberArray(1)).toEqual([20])
  })
  it('should generate an array with 50000 numbers', function() {
    generateNumberArray(50000);
    expect(arr.length).toEqual(50000);
  })
  it('should generate an array with 0 objects', function() {
    generateNumberArray(0);
    expect(arr.length).toEqual(0);
  })
})
