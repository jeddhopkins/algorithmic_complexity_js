describe('All Functions', function() {
  describe('last', function() {

    it('expects [] to equal ""', function() {
      expect(last([])).toEqual()
    });
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

  describe('last2', function() {

    it('expects [] to equal ""', function() {
      expect(last2([])).toEqual()
    });
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

    it('expects [] to equal ""', function() {
      expect(last3([])).toEqual()
    });
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

  describe('reversing', function() {

    it('expects [] to equal []', function() {
      expect(reversing([])).toEqual([])
    });
    it('expects [1] to equal [1]', function() {
      expect(reversing([1])).toEqual([1])
    });
    it('expects [1, 2] to equal [2, 1]', function() {
      expect(reversing([1, 2])).toEqual([2, 1])
    });
    it('expects [1, 2, 3, 4, 5, 6] to equal [6, 5, 4, 3, 2, 1]', function() {
      expect(reversing([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1])
    });
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

  describe('reversing2', function() {

    it('expects [] to equal []', function() {
      expect(reversing2([])).toEqual([])
    });
    it('expects [1] to equal [1]', function() {
      expect(reversing2([1])).toEqual([1])
    });
    it('expects [1, 2] to equal [2, 1]', function() {
      expect(reversing2([1, 2])).toEqual([2, 1])
    });
    it('expects [1, 2, 3, 4, 5, 6] to equal [6, 5, 4, 3, 2, 1]', function() {
      expect(reversing2([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1])
    });
    it('expects [1, 2, 3, 4, 5] to equal [5, 4, 3, 2, 1]', function() {
      expect(reversing2([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1])
    });
    it('expects [a, b, c, d, e] to equal [e, d, c, b, a]', function() {
      expect(reversing2(['a', 'b', 'c', 'd', 'e'])).toEqual(['e', 'd', 'c', 'b', 'a'])
    });
    it('expects [22, null, hi] to equal [hi, null, 22]', function() {
      expect(reversing2([22, null, 'hi'])).toEqual(['hi', null, 22])
    });
  });

  describe('reversing3', function() {

    it('expects [] to equal []', function() {
      expect(reversing3([])).toEqual([])
    });
    it('expects [1] to equal [1]', function() {
      expect(reversing3([1])).toEqual([1])
    });
    it('expects [1, 2] to equal [2, 1]', function() {
      expect(reversing3([1, 2])).toEqual([2, 1])
    });
    it('expects [1, 2, 3, 4, 5, 6] to equal [6, 5, 4, 3, 2, 1]', function() {
      expect(reversing3([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1])
    });
    it('expects [1, 2, 3, 4, 5] to equal [5, 4, 3, 2, 1]', function() {
      expect(reversing3([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1])
    });
    it('expects [a, b, c, d, e] to equal [e, d, c, b, a]', function() {
      expect(reversing3(['a', 'b', 'c', 'd', 'e'])).toEqual(['e', 'd', 'c', 'b', 'a'])
    });
    it('expects [22, null, hi] to equal [hi, null, 22]', function() {
      expect(reversing3([22, null, 'hi'])).toEqual(['hi', null, 22])
    });
  });

  describe('reversing4', function() {

    it('expects [] to equal []', function() {
      expect(reversing4([])).toEqual([])
    });
    it('expects [1] to equal [1]', function() {
      expect(reversing4([1])).toEqual([1])
    });
    it('expects [1, 2] to equal [2, 1]', function() {
      expect(reversing4([1, 2])).toEqual([2, 1])
    });
    it('expects [1, 2, 3, 4, 5, 6] to equal [6, 5, 4, 3, 2, 1]', function() {
      expect(reversing4([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1])
    });
    it('expects [1, 2, 3, 4, 5] to equal [5, 4, 3, 2, 1]', function() {
      expect(reversing4([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1])
    });
    it('expects [a, b, c, d, e] to equal [e, d, c, b, a]', function() {
      expect(reversing4(['a', 'b', 'c', 'd', 'e'])).toEqual(['e', 'd', 'c', 'b', 'a'])
    });
    it('expects [22, null, hi] to equal [hi, null, 22]', function() {
      expect(reversing4([22, null, 'hi'])).toEqual(['hi', null, 22])
    });
  });

  describe('sorting', function() {

    it('expects [4, 3, 1] to equal [1, 3, 4]', function() {
      expect(sorting([4, 3, 1])).toEqual([1, 3, 4])
    });
    it('expects [e, d, c, b, a] to equal [a, b, c, d, e]', function() {
      expect(sorting(['e', 'd', 'c', 'b', 'a'])).toEqual(['a', 'b', 'c', 'd', 'e'])
    });
  });

  describe('sorting2', function() {

    it('expects [6, 5, 1, 4, 2, 3] to equal [1, 2, 3, 4, 5, 6]', function() {
      expect(sorting2([5, 6, 1, 4, 2, 3])).toEqual([1, 2, 3, 4, 5, 6])
    });
    it('expects [e, d, c, b, a] to equal [a, b, c, d, e]', function() {
      expect(sorting2(['e', 'd', 'c', 'b', 'a'])).toEqual(['a', 'b', 'c', 'd', 'e'])
    });
    it('expects [1, 11, 2, 22, 3, 33] to equal [1, 2, 3, 11, 22, 33]', function() {
      expect(sorting2([1, 11, 2, 22, 3, 33])).toEqual([1, 2, 3, 11, 22, 33])
    });
  });

  describe('shuffle', function() {

    it('expects [1, 2, 3, 4] to be a shuffled variation', function() {
      spyOn(Math, 'random').and.returnValue(0.1);
      expect(shuffle([1, 2, 3, 4])).toEqual([2, 3, 4, 1]);
    });
    it('expects [11, 22, 33, 44, 55, 66] to be a shuffled variation', function() {
      spyOn(Math, 'random').and.returnValue(0.4);
      expect(shuffle([11, 22, 33, 44, 55, 66])).toEqual([55, 11, 44, 22, 66, 33]);
    });
  })

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

//   describe('binarySort', function() {
//     it('expects [] to equal []', function() {
//       expect(binarySort([])).toEqual([])
//     });
//     it('expects [1] to equal [1]', function() {
//       expect(binarySort([1])).toEqual([1])
//     });
//     it('expects [1, 0] to equal [0, 1]', function() {
//       expect(binarySort([1, 2])).toEqual([2, 1])
//     });
//     it('expects [1, 1, 1, 0, 0, 0] to equal [0, 0, 0, 1, 1, 1]', function() {
//       expect(binarySort([1, 1, 1, 0, 0, 0])).toEqual([0, 0, 0, 1, 1, 1])
//     });
//   });
})
