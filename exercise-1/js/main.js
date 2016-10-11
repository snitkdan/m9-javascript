// Main JavaScript File

// String variable
var str = "this is a sentence";

// Use the length property to see how many characters are in your `str` variable
console.log(str.length)

// Use the `toUpperCase` method to create a new variable `STR` that has the `str` value, but all UPPPERCASE.
STR = str.toUpperCase();
console.log(STR);

// Use the "split" method create a new variable `words` that is an array of the component words of `str`
words = str.split(" ");
console.log(words);

// Use the length property to see how many words are in your `words` array
word_length = words.length;
console.log("Length of the words array is " + word_length);

// Write a function that returns the number of words in a string
var len = function(word) {
  return word.length;
};

// Pass a string to your function to determine that it works
console.log("Length of 'this' is " + len(words[0]));

// Write a function to test if a string contains a word, and returns a boolean value.
var contain = function(str, word) {
  return str.includes(word);
};

// Pass a phrase and a string to your function to determine that it works
console.log(contain('Have a good day', 'Have a'));
