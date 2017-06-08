// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:
// Your answer here

function max(num1, num2){

    if (num1 > num2) {
    return "Max number is " + num1
  } else if (num1 < num2) {
    return "Max number is " + num2
	 }
   else {
     return "Those numbers are equal."
   }
}
console.log(max(5,6))
console.log(max(6,5))
console.log(max(6,6))

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(num1, num2, num3){
    // Your answer here
    if (num1 > num2 && num1 > num3) {
      return "Max number is " + num1
    } else if (num2 > num3) {
      return "Max number is " + num2
    } else {
      return "Max number is " + num3
    }
}

console.log(maxOfThree(2, 3, 4))
console.log(maxOfThree(4, 2, 3))
console.log(maxOfThree(3, 4, 2))

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
    // Your answer here
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "y") {
      return true + ", the character is a vowel."
    } else if (char === "b" || char === "c" || char === "d" || char === "f" || char === "g" || char === "h" || char === "j" || char === "k" || char === "l" || char === "m" || char === "n" || char === "p" || char === "q" || char === "r" || char === "s" || char === "t" || char === "v" || char === "w" || char === "x" || char === "z") {
      return false + ", the character is a consonant!"
    } else {
      return false + ", the character is not in the alphabet!"
    }

}

console.log(isVowel("b"))
console.log(isVowel("e"))
console.log(isVowel("#"))

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:

function sum(num1, num2){
  let answer = num1 + num2
  return answer
}

console.log(sum(4,5))
console.log(sum(10,-5))
console.log(sum(15,5.5))

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:

function avg(num1, num2, num3){
  let answer = (num1 + num2 + num3) / 3
  return "The average is " + answer
}

console.log(avg(20,15,32))
console.log(avg(20,20,20))

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:

function getLength(aString){
  let answer = aString.length
  return answer
}

let aString = "A simple cut or series of cuts acts as a powerful drawing device able to redefine spatial situations and structural components"

console.log(getLength(aString))

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:

function greaterThan(num1, num2){
    if (num2 > num1) {
    return true
  } else {
    return false
   }
}
console.log(greaterThan(5,6))
console.log(greaterThan(6,5))
console.log(greaterThan(6,6))

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:

function greet(name){
  return '"Hello, ' + name + '!"'
}

console.log(greet("Frederich"))
console.log(greet("Hilda"))

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:

function madlib(word1, word2, word3, word4){
  return '"' + word1 + ' brown ' + word2 + ' jumps ' + word3 + ' the ' + word4 + '"'
}

console.log(madlib("quick", "fox", "over", "fence"))
console.log(madlib("slow", "sloth", "through", "hoop"))
