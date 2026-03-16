// let age = prompt("whats you age bruda:")
// console.log(typeof age) //-> string , reason is so
// console.log(typeof Number(age)) //->number why? bcz - Number(age) tries to convert age into number if string -"dfj" cames in prompt then the function return NaN - NOT A NUMBER then typeof return number bcz nan is related to number anything related to number will be return as number by typeof. 

// // ======= TYPE COERCION==========

// let a = 10
// let b = "1"
// console.log(a+b) //-> 101 bcz of concatination , but
// //but in other operator have only work to do that is mathmetical calcualtion , so they converted the sting that is 1 into a number and cal math logic.
// console.log(a-b) //->9
// console.log(a*b) //->10 .. and so on
// let c = "sf"
// console.log(b-c) //->NaN not a number 
//Type casting is the process of converting one type of data into another 

// // ======== SWAPING =============
// // SWAPING with variable only :

// let a = 10 
// let b = 100
// let c = a // variable c take the copy value of variable a , ie : 10 , but a still have value 10 ,until and unless it is overwrite
// a = b  // ok , here the value of a is overwritten by b , so now the value of a is -> 100
// b = c // and the value of b become after overwritten ie: ->  10
// console.log(a , b) // results in  swaping of a into b and b into a , ie - > 100 , 10

// // SWIPING without any extra variables

// let a = 10
// let b = 100 
// a = a + b // 10 + 100 = 110 ie: a = 110
// b = a - b // now a becomes 110 then , 110 - 100 = 10 ie: b = 10
// a = a - b // now b becomes 10 and a = 110 then , 110 - 10 = 100 ie: a = 100
// console.log(a,b) // - (100 , 10)

// //==========SWAPING with destructing ===========

// let a = 10 
// let b = 100;
// [a , b] = [b , a]
// console.log(a,b) // -> 100 , 10
// // important - index.js:40 Uncaught ReferenceError: Cannot access 'b' before initialization, why? because after b = 100 thera was no semicolons , this goes into a TDZ ie,temporal dead zone , this usualy happens with let and cosnt . if you put semicolon after b then it works 


// // lets solve qn without using loop and its static approach , 

// let a = 1234 // output should be - 1+2+3+4 = 11
// let b = a%10  // 4
// let c = Math.floor(a/10) % 10 // first a/10 and using math.floor() it give you quotient and applying % 10 gives you the remainder of that quotient ,ie- 3 so c = 3
// let d = Math.floor(a/100) 
// let e = d % 10 // 2
// let f = Math.floor(d/10) // 1
// let sum = f+e+c+b
// console.log(sum) //10
// // just a practice those kind of problem are easily solved using loops.

// // =========PLAYING WITH UNARY OPERATORS========

// let a = 10
// // a++
// console.log(a++) // ->10

// let b = ++a + ++a
// console.log(b) // ->25


// // =========PLAYING WITH MATH FUNCTION ====== 

// let a = 1000000

// console.log(Math.max(Math.trunc(Math.random() * a) , Math.trunc(Math.random() * a) , Math.trunc(Math.random() * a)) )