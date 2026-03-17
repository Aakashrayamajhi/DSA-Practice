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


// //========== TAKING INUPUT AGE AND IDENTIFYING VALID VOTERS ==========

// let age = Number(prompt("Enter your age")) // if you enter number then it converted into string also , if you entered string instead of age then , Number() takes it and result-  NaN

// if(isNaN(age)){
//     console.log("invalid input")
// }else if( age >=18){
//     console.log("you are a valid voter")
// }else{
//     console.log("sorry you cannot vote");

// }

// ========QUESTION==========
/* AMOUNT     DIS %
  0-5000       0%
5001 - 7000    5%
7001 - 9000    10%
MORE THAN 9K   20% */

// let amount = Number(prompt("Enter total Amount"))

// if(isNaN(amount)){
//     console.log("invalid input")
// } else if(amount >= 0 && amount <= 5000){
//     console.log("Total Amount:", amount)
// }else if(amount > 5000 && amount <= 7000){
//     let discount_amount = amount * 0.05
//     let total = amount - discount_amount
//     console.log("Total Amount:", total)
// }else if(amount > 7000 && amount <= 9000){
//     let discount_amount = amount * 0.10
//     let total = amount - discount_amount
//     console.log("Total Amount:", total)
// }else if(amount > 9000){
//     let discount_amount = amount * 0.20
//     let total = amount - discount_amount
//     console.log("Total Amount:", total)
// }


// //========= TRICKY ELECTRICITY BILLING QUESTION ==========

// /* UNIT      PRICE
// UP TO 100    RS 4.2/UNIT
// 101 - 200    RS 6/UNIT
// 201 - 400    RS 8/UNIT
// MORE THAN 400 THEN RS 13/UNIT */

// let unit = Number(prompt("enter your unit"))
// let amount = 0

// if(isNaN(unit)){
//     console.log("invalid input")

// }else if(unit>=0 && unit<=100){
//      amount = unit * 4.2

// }else if (unit <= 200) {
//     amount = 100 * 4.2 + (unit - 100) * 6;
// }
// else if (unit <= 400) {
//     amount = 100 * 4.2 + 100 * 6 + (unit - 200) * 8;
// }
// else {
//     amount = 100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13;
// }

// console.log("price:", amount)


// // ======= ATM MONEY WITHDRAW SYSTEM ======

// let amount = Number(prompt("Enter your Amount to Withdraw:"))

// if(isNaN(amount)){
//     console.log("invalid input")
// }

// if(amount >= 1000){
//     console.log("Rs 1000 notes:", Math.trunc(amount/1000))
// amount = amount % 1000
// }

// if(amount >= 500){
//        console.log("Rs 500 notes:", Math.trunc(amount/500))
// amount = amount % 500
// }
// if(amount >= 100){
//        console.log("Rs 100 notes:", Math.trunc(amount/100))
// amount = amount % 100
// }
// if(amount >= 50){
//        console.log("Rs 50 notes:", Math.trunc(amount/50))
// amount = amount % 50
// }
// if(amount >= 20){
//        console.log("Rs 20 notes:", Math.trunc(amount/20))
// amount = amount % 20
// }
// if(amount >= 10){
//        console.log("Rs 10 notes:", Math.trunc(amount/10))
// amount = amount % 10
// }
// if(amount >= 5){
//        console.log("Rs 5 notes:", Math.trunc(amount/5))
// amount = amount % 5
// }
// if(amount >= 2){
//        console.log("Rs 2 coins:", Math.trunc(amount/2))
// amount = amount % 2
// }
// if(amount >= 1){
//        console.log("Rs 1 coin:", Math.trunc(amount/1))
// amount = amount % 1
// }

// // ============ for loop ==========

// for(;;){
//        console.log("valid")
// } // this is an valid loop and it run as an infinit loop. if we use two semicolons ; ; inside forloop then codo became valid it dosent matter , start , end and increaments are given or not , lets take another example also for this

// for( let i = 1; ;){
//        console.log("still valid and it runs infinite");  
// } // another example

// for(let i = 1 ; i<10 ;){
//        console.log("still valid and runs infinite");

// }

// // ===== sum of n natural numbers =======

// let n = Number(prompt("enter any number"))
// if(isNaN(n) || n<0){
//        console.log("invalid input");

// }


// let sum  = 0

// for( let i = 1; i<=n ; i++){
//   sum += i
// }
// console.log("sum of n natural numbers:", sum);


// ====== factorial of n iee:   5! = 5*4*3*2*1 , same as sum of n natural number , just we have to do multiply instead of sum ,  ie : factorial *= i

// let n = Number(prompt("enter any number"))
// let fact = 1 // 0 batw start garnu hidaina reason 0 * any number = 0

// if (isNaN(n)) {
//        console.log("invalid input");

// } else {
//        if (n < 0) {
// console.log("you must provide positive number")
//        } else {
//               for (let i = 1; i <= n; i++) {
//                      fact *= i
//               }
//               console.log("factorial of n natural numbers:", fact);
//        }

// }


// // ===== factor of n number ===========


//  let n = Number(prompt("enter any number"))
// let num = 0

// if (isNaN(n)) {
//        console.log("invalid input");

// } else {
//        if (n < 0) {
// console.log("you must provide positive number")
//        } else {
//               for (let i = 1; i <= n; i++) {
//                      num = n/i
//                      if(Number.isInteger(num)){
//                             console.log( i )
//                      }
//               }
              
//        }

// }

// //better version

// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {  // remainder 0 means its an integer value 
//         console.log(i);
//     }
// } 
// //even more optimized version 

// for (let i = 1; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//         console.log(i);
//         if (i !== n / i) {
//             console.log(n / i);
//         }
//     }
// }


// // ================= prime numbner ===========

// let n = Number(prompt("enter any number"))
// let count = 0

// if (isNaN(n)) {
//        console.log("invalid input");

// } else {
//        if (n <= 1) {
// console.log("you must provide positive number")
//        } else {
//               for (let i = 1; i <= n; i++) {
//                      if(n%i == 0){
//                             count++  
//                      }
//               }
//               if(count == 2){
//  console.log("yes this is a prime number:", n);
//               } else {
//                      console.log("not a prime number")
//               }
             
//        }

// }

// //optimized

// let n = Number(prompt("Enter a number"));

// if (isNaN(n) || n <= 1) {
//     console.log("Not a prime number");
// } else {
//     let isPrime = true;

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break; // no need to check further
//         }
//     }

//     console.log(isPrime ? "Yes, prime number" : "Not a prime number");
// }