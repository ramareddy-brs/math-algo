/** 
Author : Build Rise Shine 

Created : 2023 

Script : Fibonacci

Description : write an algorithm for fibonacci series.

    The Fibonacci series is a sequence of numbers where each number is the 
    sum of the two preceding numbers. The series typically starts with 0 and 1, 
    and subsequent numbers are obtained by adding the two previous numbers.

(c) Copyright by BRS Studio. 
**/

/**
 * Regular fibonacci implementation following the definition:
 * Fib(0) = 0
 * Fib(1) = 1
 * Fib(n) = Fib(n-1) + Fib(n-2)
 *
 * @param Number
 * @return Number
 */

const fibseries = [0, 1]; // array that holds the fibonacci series and initially it has 0 and 1

// Fibonacci Algorithm
let fibonacci = function (n) {
  let fibNMinus2 = 0,
    fibNMinus1 = 1,
    fib = n;
  for (let i = 1; i < n; i++) {
    fib = fibNMinus1 + fibNMinus2; // 0 + 1 = 1 // 1 + 1 = 2 // 1 + 2 = 3
    fibNMinus2 = fibNMinus1; // 1  //1 // 2
    fibNMinus1 = fib; // 1 // 2 / 3
    fibseries.push(fib);
  }
  return fib;
};

// Implementation
const fibNum = 4;
const fibResult = fibonacci(fibNum);
console.log(`The Fibonacci number for the give number ${fibNum} is ${fibResult}`);
console.log("The fibonacci series is ");
console.log(fibseries);

// BIG O Notation
// Time complexity - O(n)
// Space complexity - O(1)

// STEPS
//  - Init fibNMinus2 = 0 (position n - 1 ) and fibNMinus1 = 1 (position n - 1 )
//  - for loop to iterate n -1
//  - calculate the current fib number by adding fibNMinus1 & fibNMinus2
//  - update the fibNMinus2 to previous fibNMinus1 value
//  - update the fibNMinus1 to previous fib value
//  - push it to the array
