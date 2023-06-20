const maxChar = (str) => {
  // creates a new object for use later
  let counter = {}
  // splits the string given to us into an array usable by our function
  const arr = str.split('')
  // loops over the array we created
  for (let i = 0; i < arr.length; i++) {
    // if the counter object includes the current value being looped over
    if (Object.keys(counter).includes(arr[i])) {
      // adds one to the counter
      counter[arr[i]] += 1
      // if it does not include the current value being looped over
    } else {
      // creates a new key with the value of 1
      counter[arr[i]] = 1
    }
  }
  return counter
}


console.log(maxChar('hello'));
console.log(maxChar('Today is fantastic!'));


// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const same = (str1, str2) => {
  // creates blank strings to be used later in the function
  const cleanString = (str) => str.replace(/[^\w]/g, "").toLowerCase();
  //cleanString function is used to remove spaces and punctuation from the input string and convert it to lowercase
  const cleanedStr1 = cleanString(str1);
  const cleanedStr2 = cleanString(str2);
  // Create frequency counters for each string

  const charCount1 = {};
  const charCount2 = {};

  for (let char of cleanedStr1) {
    // Count the frequency of characters in cleanedStr1
    if (charCount1[char]) {
      charCount1[char]++;
    } else {
      charCount1[char] = 1;
    }
  }

  for (let char of cleanedStr2) {
    // Count the frequency of characters in cleanedStr2
    if (charCount2[char]) {
      charCount2[char]++;
    } else {
      charCount2[char] = 1;
    }
  }

  if (Object.keys(charCount1).length !== Object.keys(charCount2).length) {
    // Check if the number of unique characters is the same in both strings
    return false;
  }

  for (let char in charCount1) {
    // Check if the number of unique characters is the same in both strings
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}; // If all checks pass, the strings are anagrams

console.log(same('rail safety', 'fairy tales'));  // Output: true
console.log(same('RAIL! SAFETY!', 'fairy tales'));  // Output: true
console.log(same('Hi there', 'Bye there'));  // Output: false
console.log(same('', ''));
console.log(same('aaz', 'zza'));
console.log(same('anagram', 'nagaram'));
console.log(same("rat", "car"));
console.log(same('awesome', 'awesom'));
console.log(same('qwerty', 'qeywrt'));
console.log(same('texttwisttime', 'timetwisttext')); 
