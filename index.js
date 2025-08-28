//JavaScript Assignment Chapter 21 to 30
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////CHAPTER 21 " Changing case"///////////////////////////////////////////
for (let i = 0; i < fruits.length; i++) {
  fruits[i] = fruits[i].toUpperCase();
}
console.log(fruits);
// In this example, we use a for loop to iterate over the fruits array and change each element to uppercase using the toUpperCase() method.
for (let i = 0; i < fruits.length; i++) {
  fruits[i] = fruits[i].toLowerCase();
}
console.log(fruits);
// In this example, we use a for loop to iterate over the fruits array and change each element to lowercase using the toLowerCase() method.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////CHAPTER 22 "Strings: measuring length and extracting parts"///////////////////////////////////////////
let exampleString = "Hello, world!";
console.log(exampleString.length);
// In this example, we use the length property to get the length of the exampleString.
console.log(exampleString.slice(0, 5));
// In this example, we use the slice() method to extract a portion of the exampleString from index 0 (inclusive) to index 5 (exclusive).
console.log(exampleString.slice(7));
// In this example, we use the slice() method to extract a portion of the exampleString from index 7 (inclusive) to the end of the string.
console.log(exampleString.slice(-6));
// In this example, we use the slice() method to extract the last 6 characters of the exampleString.
console.log(exampleString.slice(-6, -1));
// In this example, we use the slice() method to extract a portion of the exampleString from index -6 (inclusive) to index -1 (exclusive).
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////CHAPTER 23 " Strings: finding segments"///////////////////////////////////////////
let searchString = "world";
console.log(exampleString.includes(searchString));
// In this example, we use the includes() method to check if the exampleString contains the searchString.
console.log(exampleString.indexOf(searchString));
// In this example, we use the indexOf() method to find the position of the searchString within the exampleString.
console.log(exampleString.lastIndexOf(searchString));
// In this example, we use the lastIndexOf() method to find the last occurrence of the searchString within the exampleString.
console.log(exampleString.startsWith("Hello"));
// In this example, we use the startsWith() method to check if the exampleString starts with the specified string.
console.log(exampleString.endsWith("!"));
// In this example, we use the endsWith() method to check if the exampleString ends with the specified string.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////CHAPTER 24 " Strings: finding a characters at a location"///////////////////////////////////////////
console.log(exampleString.charAt(0));
// In this example, we use the charAt() method to get the character at the specified index (0) in the exampleString.
console.log(exampleString.charCodeAt(0));
// In this example, we use the charCodeAt() method to get the Unicode value of the character at the specified index (0) in the exampleString.
console.log(exampleString.split(","));
// In this example, we use the split() method to split the exampleString into an array of substrings using the specified delimiter (",").
console.log(exampleString.split(""));
// In this example, we use the split() method to split the exampleString into an array of individual characters.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////CHAPTER 25 " Strings: replacing characters"///////////////////////////////////////////
console.log(exampleString.replace("world", "there"));
// In this example, we use the replace() method to replace the first occurrence of the specified substring ("world") with a new substring ("there") in the exampleString.
console.log(exampleString.replace(/o/g, "0"));
// In this example, we use the replace() method with a regular expression to replace all occurrences of the specified substring ("o") with a new substring ("0") in the exampleString.
console.log(exampleString.replace(/l/gi, "1"));
// In this example, we use the replace() method with a regular expression to replace all occurrences of the specified substring ("l") with a new substring ("1") in the exampleString.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////CHAPTER 26 " Strings: rounding numbers"///////////////////////////////////////////
console.log(Math.round(4.7));
// In this example, we use the Math.round() method to round the number 4.7 to the nearest integer.
console.log(Math.round(4.4));
// In this example, we use the Math.round() method to round the number 4.4 to the nearest integer.
console.log(Math.ceil(4.4));
// In this example, we use the Math.ceil() method to round the number 4.4 up to the next largest integer.
console.log(Math.floor(4.7));
// In this example, we use the Math.floor() method to round the number 4.7 down to the next smallest integer. 
console.log(Math.trunc(4.7));
console.log(Math.trunc(-4.7));
// In this example, we use the Math.trunc() method to truncate the decimal part of the number -4.7, resulting in -4.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////CHAPTER 27 " Generating random numbers"///////////////////////////////////////////
console.log(Math.random());
// In this example, we use the Math.random() method to generate a random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.floor(Math.random() * 10));
// In this example, we use Math.random() to generate a random number between 0 and 9 by multiplying the random number by 10 and then using Math.floor() to round it down.
console.log(Math.floor(Math.random() * 100) + 1);
// In this example, we use Math.random() to generate a random number between 1 and 100 by multiplying the random number by 100 and then using Math.floor() to round it down, and finally adding 1 to include 100 in the range.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////CHAPTER 28 " converting strings to integers and decimals"///////////////////////////////////////////
console.log(parseInt("42"));
// In this example, we use the parseInt() function to convert the string "42" to an integer.
console.log(parseFloat("3.14"));
// In this example, we use the parseFloat() function to convert the string "3.14" to a floating-point number.
console.log(Number("42"));
// In this example, we use the Number() function to convert the string "42" to a number.
console.log(Number("3.14"));
// In this example, we use the Number() function to convert the string "3.14" to a number.
console.log(Number("42abc")); // NaN
console.log(parseInt("42abc")); // 42
console.log(parseFloat("3.14abc")); // 3.14
// In these examples, we see how parseInt() and parseFloat() can extract numeric values from strings that contain non-numeric characters, while Number() returns NaN (Not a Number) if the string is not a valid number.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////CHAPTER 29 " Converting strings to numbers,number to string"///////////////////////////////////////////
console.log(String(42));
console.log(String(3.14));
console.log(String(true));
console.log(String(false));
console.log(String(null));
console.log(String(undefined));
// In these examples, we use the String() function to convert various data types (number, boolean, null, undefined) to strings.
console.log((42).toString());
console.log((3.14).toString());
console.log((true).toString());
console.log((false).toString());
console.log((null).toString());
console.log((undefined).toString());
// In these examples, we see how the toString() method can be used to convert various data types (number, boolean, null, undefined) to strings.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////CHAPTER 30 "controlling the length of strings"///////////////////////////////////////////
console.log("Hello, world!".length);
// In this example, we use the length property to get the length of the string "Hello, world!".
console.log("Hello, world!".charAt(0));
// In this example, we use the charAt() method to get the character at index 0 of the string "Hello, world!".
console.log("Hello, world!".substring(0, 5));
// In this example, we use the substring() method to get a substring of the string "Hello, world!" from index 0 to index 5.
console.log("Hello, world!".slice(0, 5));
// In this example, we use the slice() method to get a slice of the string "Hello, world!" from index 0 to index 5.
console.log("Hello, world!".slice(-6, -1));
// In this example, we use the slice() method to get a slice of the string "Hello, world!" from index -6 to index -1.
console.log("   Hello, world!   ".trim());
// In this example, we use the trim() method to remove whitespace from both ends of the string "   Hello, world!   ".
console.log("   Hello, world!   ".trimStart());
// In this example, we use the trimStart() method to remove whitespace from the beginning of the string "   Hello, world!   ".
console.log("   Hello, world!   ".trimEnd());
// In this example, we use the trimEnd() method to remove whitespace from the end of the string "   Hello, world!   ".
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// MUNTAZIR MEHDI ///////////////////////