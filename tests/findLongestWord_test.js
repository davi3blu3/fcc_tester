var expect = require('chai').expect;
var TestFunc = require('../scripts/findLongestWord.js');

describe('findLongestWord', function() {

    // TEST ONE: Is the function defined?
    it('function exists', function() {
        expect(TestFunc.findLongestWord).to.not.be.undefined;
    });

    // TEST TWO: Does it return a number?
    it('function returns a number', function() {
        var input = 'The quick brown fox jumped over the lazy dog';
        var actual = TestFunc.findLongestWord(input);
        expect(actual).to.be.a('number');
    });

    // TEST THREE: Quick Brown Fox
    it('The quick brown fox ... returns 6', function() {
        var input = 'The quick brown fox jumped over the lazy dog';
        var expected = 6;
        var actual = TestFunc.findLongestWord(input);
        expect(actual).to.equal(expected);
    });

    // TEST FOUR: Jedi
    it('The force is strong with this function', function() {
        var input = 'May the force be with you';
        var expected = 5;
        var actual = TestFunc.findLongestWord(input);
        expect(actual).to.equal(expected);
    });
    
    // TEST FIVE: Monty Python
    it('African or European?', function() {
        var input = 'What is the average airspeed velocity of an unladen swallow';
        var expected = 8;
        var actual = TestFunc.findLongestWord(input);
        expect(actual).to.equal(expected);
    });

     // TEST SIX: Super-Long
    it('Otorhino-what??', function() {
        var input = 'What if we try a super-long word such as otorhinolaryngology';
        var expected = 19;
        var actual = TestFunc.findLongestWord(input);
        expect(actual).to.equal(expected);
    });   

});
