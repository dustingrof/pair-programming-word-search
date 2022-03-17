
//transpose function writen by Tony and Nicole on March 15, 2022
const transpose = function(matrix) {
  let newArray = [];
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (!newArray[c]) {
        newArray.push([matrix[r][c]]);
      } else {
        newArray[c].push(matrix[r][c]);
      }
    }
  }
  return newArray;
};
//written by Tony and Dustin on March 16th, 2022
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  
  if (!letters) return false;

  if (word.length < 2) return false;

  if (!letters && word.length < 2) return false;
  
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  
  let newArray = transpose(letters);
  const verticalJoin = newArray.map(ls => ls.join(''));
  for (let v of verticalJoin) {
    if (v.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;


/*
Some notes about the Word Search Solver

It's a function that receives a 2D array of letters and a word
Example: function([a, b, c, d], word) [];

The function must search for the word horizontally and vertically.
Should return true when found, false otherwise

Get the first two tests to pass

Then write new tests to check if word is written vertically, given an empty array, etc

*/