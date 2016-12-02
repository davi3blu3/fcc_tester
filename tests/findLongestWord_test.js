var expect = require('chai').expect;
var TestFunc = require('../scripts/findLongestWord.js');

describe('findLongestWord', function() {

    // TEST ONE: Is the function defined?
    it('function exists', function() {
        expect(TestFunc.findLongestWord).to.not.be.undefined;
    });

    // TEST TWO: Does it return a number?
    it('function returns a number', function() {
        var input = "The quick brown fox jumped over the lazy dog";
        // var expected = 6;
        var actual = TestFunc.findLongestWord(input);
        expect(actual).to.be.a('number');
    });

    // TEST THREE: QUICK BROWN FOX
    it('Quick Brown Fox returns 6', function() {
        var input = "The quick brown fox jumped over the lazy dog";
        var expected = 6;
        var actual = TestFunc.findLongestWord(input);
        expect(actual).to.equal(expected);
    });
    

});