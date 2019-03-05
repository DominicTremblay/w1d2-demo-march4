// Write a ** node program ** that ** takes in** an unlimited number
// of ** command line arguments **, ** goes through ** each and **
// prints out ** the ** sum ** of them.
// If any argument is ** not a whole number **, skip it.Do support
// negative numbers though.Output error message if any argument
// ** is not a number.**

// Accept command-line arguments
// Remove the first 2 elements in the array

var args = process.argv.slice(2);

function convertToNumbers(args) {
  var numbersArr = [];
  for (var i = 0; i < args.length; i++) {
    numbersArr.push(Number(args[i]));
  }
  return numbersArr;
}

// filter out any none whole number

function filterDecimalNb(numbersArr) {
  var integersArr = [];

  for (var i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] % 1 === 0) {
      integersArr.push(numbersArr[i]);
    }
  }
  return integersArr;
}

// input: array of numbers
function notAllNumbers(numbersArr) {
  for (var i = 0; i < numbersArr.length; i++) {
    if (isNaN(numbersArr[i])) {
      return true;
    }
  }
  return false;
  // return true or false
}

// Validate my args
function validateArgs(args) {
  if (notAllNumbers(args)) {
    console.log('Error: Please provide only numbers');
    process.exit();
  }
  return args;
}

// Filter out any decimal number

function sum(numbersArr) {
  var sum = 0;
  // loop go through each command line arguments
  for (var i = 0; i < numbersArr.length; i++) {
    // sum the arguments
    sum = sum + numbersArr[i];
  }
  return sum;
}

// print out the sum
function printResult(result) {
  console.log('The result is: ' + result);
}

var validatedArgs = validateArgs(convertToNumbers(args));
var filteredArgs = filterDecimalNb(validatedArgs);

printResult(sum(filteredArgs));
