// --------------------------
//#region Guard
// --------------------------

/**
 * @param {number} a
 * @param {number} b
 * @returns the product of `a` and `b`
 * _unless_ either of the parameters is not a number,
 * in which case the string `"error"` is returned.
 */

function multiplyNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "error";
  }

  return a * b;
}

//make function vote that takes user input for age: number
//it at least 18, returns "Who would you like to vote for?"
//if not 18 yet, returns "You must be 18 or older to vote. "

/**
 * 
 * @param {number} age 
 * @returns string, if 18 or older "Who would you like to vote for?", if less than 18 , "You must be 18 or older to vote. "
 *
 */

function vote(age){
  if (age >= 18) {
    return "Who would you like to vote for?";
  } else {
    return "You must be 18 or older to vote.";
  }
}


//return string a and b, unless a or b is not a string
//if a or b isn't a string, return "error"
function concatenateStrings (a, b) {
  if ((typeof a !== "string") || (typeof b !== "string")) {
    return "error";
  } else {
    return a + b;
  }

}
//#endregion Guard 

// --------------------------
//#region Accumulator Variable
// --------------------------

/**
 * @param {int[]} nums
 * @returns the sum of the given array of numbers
 */
function sumArray(nums) {
  let total = 0;
  for (const number of nums) {
    total += number;
  }
  return total;
}

//Returns sum of all integrs from 1 to n
//If n is 0 or negative, return 0
//n is an integer

//if... else
//if n is 0 or negative , return 0
//else return sum
//-1 -> 0
//0 -> 0 
//1 -> 1
//2 -> 2+1 -> 3
//3 -> 3+2+1 ->6

/** 
* @param {int[]} nums
* @returns the sum of positive numbers
*/

function sumToN(n){
let total = 0;
 for (let i=0; i <= n; i++ ){ 
  total += i;
 } return total;
  }

  //factorial (n: number) returns product of all ints
  //from 1 to n.
  //If n is 0, then 1 is returned
  //If n is negative or not an int, return "error"

  /**
   * @param {[int]} number
   * @returns the product of all numbers from 1 to n
   */

  function factorial(n){
    if (n < 0)  return "error";
    if (!Number.isInteger(n)) return "error";
    let product = 1;
    for (let i=2; i <= n; i++) {
      product *= i;
  } return product;
  }
//#endregion Accumulator Variable

// --------------------------
//#region Conditional Accumulation
// --------------------------


//buildArray(n: number) returns array of all ints from 1 to n
//if n is 0 or negative , return empty array
//if n is not integer, return "error"

/** 
 * @param {[int]} number
 * @returns array of ints from 1 to n
 */

function buildNArray(n) {
  if (!Number.isInteger(n)) return "error";
  if (n <= 0) return [];

  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  } return array;
}
/**
 * @param {[int]} nums
 * @returns the greatest number in the given array
 */
function findMax(nums) {
  let max = -Infinity;
  for (const number of nums) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}

//findLongestString(string[]) returns longest string in
//array of strings
//If array is empty, return an empty string

//if array is empty, return empty string
//use for for loop to check for longest string

/**
 * @param {[array]} string
 * @returns longest string unless if array is empty, return empty string
 */

function findLongestString (strings) {
 if (strings.length === 0) {
  return "";
 }
 let longest = strings[0];
 for (str of strings){
  if (str.length > longest.length) {
    longest = str;
  }
 } return longest;
}

//#endregion Conditional Accumulation

// --------------------------
//#region Return Timing
// --------------------------

/**
 * @param {string} song
 * @param {string[]} playlist
 * @returns whether the given song can be found in the playlist
 */
function isSongInPlaylist(song, playlist) {
  for (const s of playlist) {
    if (s === song) {
      return true;
    }
  }
  return false;
}

//#endregion Return Timing

// --------------------------
//#region Nested Loops and Arrays
// --------------------------

/**
 * @param {number} cols
 * @param {number} rows
 * @returns a 2D array of the given dimensions filled with "-"
 */
function makeBoard(cols, rows) {
  const board = [];
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      row.push("-");
    }
    board.push(row);
  }
  return board;
}

//#endregion Nested Loops and Arrays

// --------------------------
//#region Practice
// --------------------------

//#endregion Practice

/**
 * The code below exports your functions so they can be tested.
 * Notice that the names are currently commented out.
 * Uncomment the functions as you write them.
 */
module.exports = {
  multiplyNumbers,
  vote,
  concatenateStrings,
  sumArray,
  sumToN,
  factorial,
  buildNArray,
  findMax,
  findLongestString,
  // countPresent,
  // getDnaComplement,
  isSongInPlaylist,
  // isAllEven,
  makeBoard,
  // evenAndOdd,
  // exponentiate,
  // onlyOdds,
  // bacteriaTime,
  // getAverage,
  // countCoins,
  // getPairs,
};
