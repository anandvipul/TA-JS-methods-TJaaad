let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(words) {
  let sum = 0;
  let word = "";
  for (let i = 0; i < words.length; i++) {
    if (sum < words[i].length) {
      sum = words[i].length;
      word = words[i];
    }
  }
  return word;
}

let wordLongest = findLongestWord(words);
// - Convert the above array "words" into an array of length of word instead of word.
function arrayOfLength(words) {
  let arr = [];
  for (let a = 0; a < words.length; a++) {
    arr.push(words[a].length);
  }
  return arr;
}
// - Create a new array that only contains word with atleast one vowel.
function checkVowel(word) {
  return (
    word.includes("a") ||
    word.includes("e") ||
    word.includes("i") ||
    word.includes("o") ||
    word.includes("u")
  );
}

let vowelArr = words.filter(checkVowel);
// - Find the index of the word "rhythm"
words.indexOf("rhythm");
// - Create a new array that contians words not starting with vowel.
let vowelStart = words.filter(
  (a) =>
    a.startsWith("a") ||
    a.startsWith("e") ||
    a.startsWith("i") ||
    a.startsWith("o") ||
    a.startsWith("u")
);
// - Create a new array that contianse words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(arr) {
  return arr.reduce((num, next) => num + next);
}

sumArray(numbers);
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
function mul3(num) {
  return num * 3;
}

function numbersMul3(arr) {
  let arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    arrRes.push(arr[i] * 3);
  }
  return arrRes;
}
// - Create a new array that contains only even numbers
let evenNumbers = numbers.filter((num) => num % 2 == 0);
// - Create  a new array that contains only odd numbers.
let oddNumbers = numbers.filter((num) => num % 2 != 0);
// - Create a new array that should have true for even number and false for odd numbers.
let namedArray = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    namedArray.push(true);
  } else {
    namedArray.push(false);
  }
}
// - Sort the above number in assending order.
let sortedArray = numbers.sort();
// - Does sort mutate the original array?
//yes
// - Find the sum of the numbers in the array.
function sumArray(arr) {
  return arr.reduce((num, next) => num + next);
}

sumArray(sortedArray);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
