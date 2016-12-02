var expect = require('chai').expect;
var TestFunc = require('../scripts/findLongestWord.js');

describe('findLongestWord', function() {

    // TEST ONE: IS THE FUNCTION DEFINED?
    it('should exist', function() {
        expect(TestFunc.findLongestWord).to.not.be.undefined;
    });
    
});


// findLongestWord("The quick brown fox jumped over the lazy dog");