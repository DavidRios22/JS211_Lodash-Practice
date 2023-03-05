const _ = require('lodash');
const assert = require('assert');

let numbers = [8, 16, 24, 32, 40, 48, 56, 64, 72]

if (typeof describe === 'function') {
  describe("Lodash Tests", function() {
    it("Should remove 8 from the array.", function(){
      const removeEight = _.without(numbers, 8)
      assert.equal(removeEight[0], 16)
    })
    it("Should create two arrays.", function(){
      const twoArrays = _.chunk(numbers, 5)
      assert.equal(twoArrays.length, [2])
    })[0], 16
    it("Should reverse the array.", function(){
      const reversedArray = _.reverse(numbers)
      assert.equal(reversedArray[0], 72)
    })
    it("Should shuffle the array.", function(){
      const shuffledArray = _.shuffle(numbers, 8)
      assert.notEqual(shuffledArray[0], 8)
    })
  }
)}
