// FIND THE LONGEST WORD IN A STRING
// BASIC ALGORITHM SCRIPTING from https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string

// Return the length of the longest word in the provided sentence.
// Your response should be a number.

var TestFunc;
TestFunc = {
    findLongestWord: function(str) {

        // *** WRITE FUNCTION TO TEST BETWEEN THIS LINE ***
        
        var Arr = str.split(' ');
        var longest = 0;
        
        for (i = 0; i < Arr.length; i++) {
            if (Arr[i].length > longest) {
            longest = Arr[i].length;
            }
        }
        return longest;

        // *** AND THIS ONE ***
    }
};

module.exports = TestFunc;