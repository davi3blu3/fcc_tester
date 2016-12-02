var expect = require('chai').expect;
var TestFunc = require('../scripts/pigLatin.js');

describe('igPayAtinLay', function() {

    // TEST ONE: Is the function defined?
    it('function exists', function() {
        expect(TestFunc.igPayAtinLay).to.not.be.undefined;
    });

    // TEST TWO: Does it return a string?
    it('function returns a string', function() {
        var input = 'California';
        var actual = TestFunc.igPayAtinLay(input);
        expect(actual).to.be.a('string');
    });

    // TEST THREE: California
    it('california returns aliforniacay', function() {
        var input = 'california';
        var expected = 'aliforniacay';
        var actual = TestFunc.igPayAtinLay(input);
        expect(actual).to.equal(expected);
    });

    // TEST FOUR: Paragraphs
    it('paragraphs returns aragraphspay', function() {
        var input = 'paragraphs';
        var expected = 'aragraphspay';
        var actual = TestFunc.igPayAtinLay(input);
        expect(actual).to.equal(expected);
    });

    // TEST FIVE: Glove
    it('glove returns oveglay', function() {
        var input = 'glove';
        var expected = 'oveglay';
        var actual = TestFunc.igPayAtinLay(input);
        expect(actual).to.equal(expected);
    });

    // TEST SIX: Algorithm
    it('algorithm returns algorithmway', function() {
        var input = 'algorithm';
        var expected = 'algorithmway';
        var actual = TestFunc.igPayAtinLay(input);
        expect(actual).to.equal(expected);
    });           

    // TEST SEVEN: Eight
    it('eight returns eightway', function() {
        var input = 'eight';
        var expected = 'eightway';
        var actual = TestFunc.igPayAtinLay(input);
        expect(actual).to.equal(expected);
    }); 
});
