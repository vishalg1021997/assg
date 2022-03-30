// Given an array of string generate an array whose first or last character is a

// Sample Input - ["assignment", "problem", "media", "upload"]

// Sample Output - ["assignment", "media"]

console.log('_____________________________________________________','\n')
console.log("Question 1 ARRAY STRING PATTERN")
console.log('_____________________________________________________','\n')

var arr = ["assignment", "problem", "media", "upload"]

var str = arr.filter(e => e[0]=='a' || e[e.length-1]=='a');
console.log(str,'\n')

// Given an array of string generate an array with their first characters

// Sample Input - ["Masai", "School"]

// Sample Output - ["M", "S"]

console.log('_____________________________________________________','\n')
console.log("Question 2 ARRAY STRING FIRST CHARACTER")
console.log('_____________________________________________________','\n')

var arr = ["Masai", "School"]

var str = arr.map(e => e[0])
console.log(str,'\n')

// Given an array of strings print the length of each string

// example : ["apple", "windows", "ubuntu"]

console.log('_____________________________________________________','\n')
console.log("Question 3 ARRAY STRING LENGTH")
console.log('_____________________________________________________','\n')

var arr = ["apple", "windows", "ubuntu"]

arr.forEach(e => console.log('Length of',e,'is',e.length))
