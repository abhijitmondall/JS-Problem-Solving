//
// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
const stringReverse = function (str) {
  // Input will be string

  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  // Return the reverse of the string
  return reversedStr;
};

// console.log(stringReverse("Hello World"));

//
// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
const sumOfPositiveNum = (arr) =>
  arr.reduce((acc, val) => acc + (val >= 0 && val), 0);

// console.log(sumOfPositiveNum([2, -5, 10, -3, 7]));

//
//Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
const mostFrequentEl = function (arr) {
  // Input will be an Array
  // Create new Map
  const map = new Map();

  let result = 0;
  let frequentKey;

  // Loop through the input array and set the Element in the new Map with it's value
  arr.map((el) => map.set(el, map.has(el) ? map.get(el) + 1 : 1));

  // Loop through the new Map
  for (let [key, val] of map) {
    // check the current val of new Map is greater than the result variable value
    if (val > result) {
      // Update Result variable
      result = val;

      // Update frequent Element
      frequentKey = key;
    }
  }

  // Return Most frequent element
  return frequentKey;
};

// console.log(mostFrequentEl([3, 5, 2, 5, 3, 3, 1, 4, 5]));

//
// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
const indicesOfTwoNum = function (arr, target) {
  // Input will be an Array and a target Value
  let result = [];

  // Loop through the input Array
  arr.map((el, i) => {
    // Check the two numbers in the array that add up to the target value
    el + arr[i + 1] === target && (result = [i, i + 1]);
  });

  // Return an array containing the indices of the two numbers
  return result;
};

// console.log(indicesOfTwoNum([1, 3, 6, 8, 11, 15], 9));

//
// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
const myCalculator = function (num1, num2, operator) {
  // Input will be two numbers and an operator (+, -, *, /)
  let result;

  operator === "+" && (result = +num1 + +num2);
  operator === "-" && (result = +num1 - +num2);
  operator === "*" && (result = +num1 * +num2);
  operator === "/" && (result = +num1 / +num2);

  // Return the result of the two numbers
  return result;
};

// console.log(myCalculator(10, 2, "/"));

//
// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
const generateRandomPassword = function (length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_-+=[]{}|:;<>,.?/";

  const allCharacters =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password.trim();
};

console.log(generateRandomPassword(12));
