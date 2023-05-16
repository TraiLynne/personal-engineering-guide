/*
 *  Complexity
 *
 *  For the following functions, write the expected Time and Auxiliary Space
 *  Complexity using what you know about nested loops, hash table look-ups and
 *  the runtime of built in functions.
 *
 *  NOTE: You don't need to code to anything for these problems, just write
 *  what you the complexity to be using big-O notation
 **/

/*
Order of Magnitude

Reduce the following into it's Big-O order of magnitude.

1. 5 + N                    Answer: O(N)
2. N + N^2                  Answer: O(N^2)
3. 15N + 13N                Answer: O(N)
4. 10000                    Answer: O(1)
5. log(N) + 1               Answer: O(log(N))
6. log(N) * 3 + 14N + 3     Answer: O(N)
7. Nlog(N) + 3N^2           Answer: O(N^2)
8. N^3 + log(N^4)           Answer: O(N^3)
9. N! + 180000N^2           Answer: O(N!)
10. 15002^N                 Answer: O(15002^N)

*/

/*
 *  List the time and auxiliary space complexity of each of the following functions.
 */

/*
 *     Index Of
 *
 *     Given an array of integers and a target value, return the index of the first
 *     element that matches the target value. If there are no matches, return -1.
 *
 *     Parameters
 *     Input: arr {Array of Integers}
 *     Input: target {Integer}
 *     Output: {Integer}
 *
 *     Examples
 *     [1, 2, 3, 4, 5, 6], 5 --> 4
 *     [9, 83, 74], 8 --> -1
 *     [6, 4, 7, 9, 7, 8, 2, 4, 3], 7 --> 2
 *
 *     Time Complexity: O(N) -> depends on the length of the array
 *     Auxiliary Space Complexity: O(1) -> not making a new array, just returning the index or -1
 */

function indexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) { // N
    if (arr[i] === target) { // + 1
      return i; // +1
    }
  }
  return -1; // +1
}

/*
 *     Evens
 *
 *     Given an array of integers, return an array of only the even values.
 *
 *     Parameters
 *     Input: arr {Array of Integers}
 *     Output: {Array of Integers}
 *
 *     Examples
 *     [1, 2, 3, 4, 5, 6] --> [2, 4, 6]
 *     [9, 83, 74] --> [74]
 *     [6, 4, 7, 9, 7, 8, 2, 4, 3] --> [6, 4, 8, 2, 4]
 *
 *     Time Complexity: O(N) -> Depends oon the length of the array
 *     Auxiliary Space Complexity: O(N) -> if all the elements are even, then it will return a new array of the same length
 */

function evens(arr) {
  var results = []; // 1
  for (let i = 0; i < arr.length; i++) { // N
    if (arr[i] % 2 === 0) { // + 1
      results.push(arr[i]); // + 1
    }
  }
  return results; // could be up to N
}

/*
 *    Sum
 *
 *    Given an array of integers, return the sum of all the integers.
 *
 *    Parameters
 *    Input: arr {Array of Integers}
 *    Output: {Integer}
 *
 *    Examples
 *    [1, 2, 3, 4, 5] --> 15
 *    [0, 1, -1] --> 0
 *    [] --> 0
 *
 *    Time Complexity: O(N) -> due to loop and it has to go all the way through, there is no way around it
 *    Auxiliary Space Complexity: O(1) -> it creates a variable and replaces it's value then returns just the variable. It's a constant amount of space.
 */

function sum(arr) {
  let total = 0; // 1
  for (let i = 0; i < arr.length; i++) { // N
    total += arr[i]; // + 1
  }
  return total; // 1
}

/*
 *   Merge Arrays
 *
 *   Given two sorted arrays of integers, return a merged sorted array of both inputs.
 *
 *   Parameters
 *   Input: arr1 {Array of Integers}
 *   Input: arr2 {Array of Integers}
 *   Output: {Array of Integers}
 *
 *   Examples
 *   [1, 3, 9], [2, 4, 8] --> [1, 2, 3, 4, 8, 9]
 *   [12, 25, 40], [20, 37, 45] --> [12, 20, 25, 37, 40, 45]
 *   [10, 13, 24], [12, 35] --> [10, 12, 13, 24, 35]
 *
 *   Time Complexity: O(N + M) -> it has to go through both arrays
 *   Auxiliary Space Complexity: O(N + M) -> it is creating a new array the same length as the other 2 arrays combined
 */

function merge(arr1, arr2) {
  const totalElements = arr1.length + arr2.length;
  let result = [];
  let i = 0;
  let j = 0;
  while (i + j < totalElements) {
    if (j >= arr2.length || (i < arr1.length && arr1[i] <= arr2[j])) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  return result;
}

/*
 *    Binary Search
 *
 *    Given a sorted array and a target value, use binary search to return the index of the target in the input array.
 *    Return -1 if no such target is found.
 *
 *    Parameters
 *    Input: arr {Array of Integers}
 *    Input: val {Integer}
 *    Output: {Integer}
 *
 *    Examples
 *    [1, 3, 4, 5, 8, 9], 5 --> 3
 *    [5, 7, 10, 12, 14], 7 --> 1
 *    [2, 4, 8, 9, 15], 3 --> -1
 *
 *   Time Complexity: O(log(N)) -> Time is split inn half with each go
 *   Auxiliary Space Complexity: O(1) -> it is only returning the index and not creating any new structures
 */

function binarySearch(arr, val) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    mid = parseInt((low + high) / 2);
    if (arr[mid] > val) {
      high = mid - 1;
    } else if (arr[mid] < val) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

/*
 *    Factorial
 *
 *    Given an input integer n, return the n factorial value.
 *
 *    Parameters
 *    Input: n {Integer}
 *    Output: {Integer}
 *
 *    Examples
 *    5  --> 120 (5 * 4 * 3 * 2 * 1)
 *    1 --> 1 (1)
 *    9 --> 362880 (9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1)
 *
 *    Time Complexity: O(N) -> depends on how big N is.
 *    Auxiliary Space Complexity: O(N) -> It's returning a new piece of data. The amount it returns depends on how big N is.
 */

function factorial(n) {
  if (n === 1) { // N
    return 1;
  }
  return n * factorial(n - 1); // * N?
}

/*
 *  First Times Last
 *
 *  Time Complexity: O(1) -> we aren't going through the entire array. We know the index of the values we want and we are doing a multiplication then returning it. All constant time actions
 *  Auxiliary Space Complexity: O(1) -> we are just returning a value not really creating anything structure-wise.
 */

function firstTimesLast(arr) { // N
  let result = null; // 1
  if (arr.length < 2) { // 1
    return result;
  }
  result = arr[0] * arr[arr.length - 1]; // 1
  return result; // 1
}

/*
 *  Most Frequent Occurrence
 *  NOTE: The string only contains letters in it
 *
 *  Time Complexity: O(N) -> It all depends on how long N is. The loops aren't nested so it's addition instead of multiplication
 *  Auxiliary Space Complexity: O(1)
 */

function mostFrequentOccurrence(str) { // This is N
  const lowerString = str.toLowerCase(); // N
  let letters = {}; // 1
  let mostFrequent; // 1

  for (let i = 0; i < lowerString.length; i++) { // N
    let char = str[i].toLowerCase(); // 1
    if (letters[char]) {
      letters[char]++;
    } else {
      letters[char] = 1;
    }
  }

  for (let key in letters) {
    if (!mostFrequent || letters[key] > mostFrequent[1]) {
      mostFrequent = [key, letters[key]];
    }
  }

  return mostFrequent[0];
}

/*
 *  Print Unordered Pairs
 *
 *  Time Complexity: O(N^2) -> nested loop, one array
 *  Auxiliary Space Complexity: O(1) -> no additional space needed 
 */

function printUnorderedPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      console.log(array[i] + "," + array[j]);
    }
  }
}

/*
 *  Make Combined Matrix
 *
 *  Time Complexity: O(MN)
 *  Auxiliary Space Complexity: O(MN)
 */

function makeCombinedMatrix(arr1, arr2) { // M & N
  let result = [];
  let row;

  for (let i = 0; i < arr1.length; i++) { // M
    row = [];
    for (let j = 0; j < arr2.length; j++) { // (*) N
      row.push(arr1[i] + arr2[j]);
    }
    result.push(row);
  }
  return result;
}

/*
 *  Nth Fibonacci
 *
 *  Time Complexity: O(N)
 *  Auxiliary Space Complexity:
 */
function nthFibonacci(n) {
  let result = [0, 1];
  for (let i = 1; i < n; i++) {
    result[i + 1] = result[i] + result[i - 1];
  }
  return result[n];
}

/*
 *  Nth Fibonacci - the return
 *
 *  Time Complexity: O(N)
 *  Auxiliary Space Complexity: O(N)
 */

function nthFibonacci(n) {
  let cache = {};

  function searchFib(index) {
    if (cache[index]) {
      return cache[index];
    }
    if (index < 2) {
      return index;
    }
    let result = searchFib(index - 1) + searchFib(index - 2);
    cache[index] = result;
    return cache[index];
  }

  return searchFib(n);
}
