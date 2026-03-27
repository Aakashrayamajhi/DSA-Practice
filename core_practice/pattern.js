// let prompt = require('prompt-sync')()
// let a = Number(prompt("enter a a number"))

// const PromptSync = require("prompt-sync")

// for(let i = 1 ; i <= a ; i++){
// for(let j = 1 ; j <=a; j++){
// process.stdout.write('# ')
// }
// console.log()

// }


// let prompt = require('prompt-sync')()
// let n = Number(prompt("enter a  number"))

// for(let i = 1 ; i <= n ; i++){
// for(let j = 1 ; j <= n ; j++){
// process.stdout.write(' ')
// for(let k = 1; k<=n ; k++){
//    process.stdout.write('# ')
// }
// }
// console.log()

// }

// //  # # # # #  # # # # #  # # # # #  # # # # #  # # # # # 
// //  # # # # #  # # # # #  # # # # #  # # # # #  # # # # #
// //  # # # # #  # # # # #  # # # # #  # # # # #  # # # # #
// //  # # # # #  # # # # #  # # # # #  # # # # #  # # # # #
// //  # # # # #  # # # # #  # # # # #  # # # # #  # # # # #


// for (let i = 1; i <= 15; i++) {
//     console.log("|")
//     if (i === 5) {
//         for (let j = 1; j <= 1; j++) {
//             {
//                 for (let k = 1; k <= 5; k++) {
//                     process.stdout.write(" - ")
//                 }
//                 console.log("")
//             }
//         }
//     }
//     if (i === 10) {
//         for (let j = 1; j <= 1; j++) {
//             {
//                 for (let k = 1; k <= 5; k++) {
//                     process.stdout.write(" - ")
//                 }
//                 console.log("")
//             }
//         }
//     }


// }

// // |
// // |
// // |
// // |
// // |
// //  -  -  -  -  -
// // |
// // |
// // |
// // |
// // |
// //  -  -  -  -  -
// // |
// // |
// // |
// // |
// // |



// for (let i = 1; i <= 5; i++) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }

//     console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }

//     console.log(row);
// }

// for( let i =1; i<= 2; i++){
//     console.log("*")
// }

// // *
// // **
// // ***
// // ****
// // *****
// // *
// // **
// // ***
// // ****
// // *****
// // *
// // *

// let prompt = require("prompt-sync")()
// let n = prompt("enter a number")

// let row = ""
// for (let i = 1; i <= n; i++) {

// row += i
//     console.log(row)

// }

// // 1
// // 12
// // 123
// // 1234
// // 12345
// // 123456




// let prompt = require("prompt-sync")()
// let n = prompt("enter a number")

// let row = ""
// let arr = ["A", "B", "C", "D", "E", "F"]
// for (let i = 0; i <= n; i++) {

//     row += arr[i]
//     console.log(row)

// }

// // A
// // AB
// // ABC
// // ABCD
// // ABCDE


// let prompt = require("prompt-sync")()
// let n = Number(prompt("enter a number"))

// for (let i = 1; i <= n ; i++) {
// let row = ""
//     for(let j = n ; j>=i; j--){
//         row +="*"
//     }
//     console.log(row)

// }

// // ****
// // ***
// // **
// // *


// let prompt = require("prompt-sync")()
// let n = Number(prompt("enter a number"))

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     // spaces
//     for (let s = 1; s <= n - i; s++) {
//         row += " ";
//     }

//     // stars
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }

//     console.log(row);
// }

// // enter a number5
// //     *
// //     *
// //    **
// //   ***
// //  ****
// // *****

// let prompt = require('prompt-sync')()
// let n = Number(prompt("enter a number: "))

// if (isNaN(n) || n <= 0) {
//     console.log("n is not a valid number. Please enter a number greater than 0");
// } else {
//     for (let i = 1; i <= n; i++) {
//         let row = ""

//         for (let j = 1; j <= n - i; j++) {
//             row += "#"
//         }

//         for (let k = 1; k <= i; k++) {
//             row += "*"
//         }

//         console.log(row)
//     }
// }

// // enter a number: 5
// // ####*
// // ###**
// // ##***
// // #****
// // *****


// let prompt = require('prompt-sync')()
// let n = Number(prompt("enter a number: "))

// if (isNaN(n) || n <= 0) {
//     console.log("n is not a valid number. Please enter a number greater than 0");
// } else {
//     for(let i = 1; i<=n; i++){
//         for(let j = 1; j<=n ; j++){
//             if( (i+j == n+1) || (i == j)){
//                 process.stdout.write("*")
//             }else{
//                 process.stdout.write(" ")
//             }
//         }
//         console.log()
//     }
// }


// // enter a number: 5
// // *   *
// //  * * 
// //   *  
// //  * * 
// // *   *


// let n = 5

// for (let i = 1; i <= n; i++) {
//     let spaces = " ".repeat(n - i)
//     let stars = "*".repeat(2 * i - 1)
//     console.log(spaces + stars)
// }

// //     *
// //    ***
// //   *****
// //  *******
// // *********


// let prompt = require("prompt-sync")()
// let n = Number(prompt("enter a number"))

// for( let i = 1 ; i<=n ; i++){
//     for(j=1 ; j<=2*n ; j++ ){
//         if( (i==j) || (i+j == 2*n)){
//             process.stdout.write("* ")
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log()
// }

// // enter a number5
// // *        *  
// //  *      *   
// //   *    *    
// //    *  *     
// //     *

// for(let i= 1; i<=5; i++){
//     let arr = []
//     arr[i] = i
//     console.log(arr)
// }

// // [ <1 empty item>, 1 ]
// // [ <2 empty items>, 2 ]
// // [ <3 empty items>, 3 ]
// // [ <4 empty items>, 4 ]
// // [ <5 empty items>, 5 ]


// let arr = [1,2,3,4,5,6,7,8,9,0]

// for(let i=0; i<arr.length ; i++){
//     if(arr[i]==7){
//         console.log("its 7="+ arr[i])
//     }
// }



// console.log(a)
//  a = 5
// console.log(a)
// var a
// console.log(a)


// let arr = [12,3,4,66,8,990,43]

// let max = min = arr[0]


// for (let i = 1; i < arr.length ; i++){
//     if( max > arr[i]){
//         max ;

//     }else{
//         max = arr[i]
//     }

//     if(min < arr[i]){
//         min;
//     }else{
//         min = arr[i]
//     }
// }

// console.log("max:", max)
// // console.log("min:", min)

// 

// let arr = [1,2,3,4,4,23423,67,5,5,67,78]
// console.log("max:" ,Math.max(...arr), "min:" , Math.min(...arr))

// let arr = [1,2,3,4,4,23423,67,5,5,67,78]
// let temp = []


// for (let i = 0; i < arr.length; i++) {
//   temp.unshift(arr[i]);
// }

// console.log(temp)
// console.log(JSON.stringify(temp));

// let arr = [0,1,1,0,1,0,1,0,1]

// let j = arr[0]


// for( let i = 0; i < arr.length ;  i++){
//     if(i && j === 0){
//         i++
//         j++
//     }
//     if(i === 1){
//         i++
//     }
//     if(i === 0 && j === 1){
//         [arr[i] , arr[j]] = [arr[j], arr[i]]
//         j++
//     }

// }
// console.log(arr)


// let arr = [1,2,3,4,3,2,1]
// let i = 0 ;
// let j = arr.length-1

// while(i < j){
//     if( arr[i] == arr[j]){

//     }else{
//         console.log("not a palindrom")
//         break;
//     }
//     i++
//     j--
// }

// console.log("palindrom")

// let arr = [1,2,3,4,3,2,1];
// let i = 0;
// let j = arr.length - 1;
// let isPalindrome = true; // assume it is a palindrome initially

// while(i < j){
//     if(arr[i] != arr[j]){
//         isPalindrome = false; // found mismatch
//         break; // no need to check further
//     }
//     i++;
//     j--;
// }

// if(isPalindrome){
//     console.log("palindrome");
// } else {
//     console.log("not a palindrome");
// }

// let arr = [1,2,3,1,1,1,2,2,1,1,1,1,4,5,7]
// let maxcount = 0
// let candidate = arr[0]

// for(let i = 0 ; i<arr.length ; i++){
//     let count = 0
// for(let j = 0 ; j < arr.length ; j++){
//     if( arr[i] == arr[j]){
//         count ++
//     }
// }
// if(count > maxcount){
//     maxcount = count
//     candidate = arr[i]
// }
// }

// console.log("most frequently availabe number is ", candidate , "and count is ", maxcount)


// let arr = [1, -2, -3, 4, 5]
// let maxsum = 0

// for (let i = 0; i < arr.length; i++) {
//     let sum = 0
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] != arr[j]) {
//             sum += arr[j]
//         }
//     }
//     console.log(sum)
//     if (sum > maxsum) {
//         maxsum = sum
//     }
// }

// console.log("maxsum after deleting:", maxsum)


// let arr = [1,2,3,4,5]
// let copy = arr[arr.length-1]

// for(let i = arr.length -1 ; i > 0 ; i--){
//   arr[i] = arr[i-1]
// }
// arr[0] = copy

// console.log(arr)



// let arr = [1,2,3,4,5]


// let prompt = require('prompt-sync')()
// let k = Number(prompt("enter a number:"))
// k = k % arr.length
// for(let i = 1; i<=k ; i++){
//   let copy = arr[0]
//   for(let j = 0 ; j < arr.length-1; j++){
//   arr[j] = arr[j+1]
//   }
//   arr[arr.length-1] = copy
//   console.log("copy:", copy)

// }

// console.log("arr:", arr)

//remove duplicate from the sorted array

// let arr = [1,1, 2, 3, 4, 4, 4, 4, 4, 5,5]
// let dup = arr[0]

// for (let i = 1; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     if (dup == arr[j]) {
//       console.log("duplicate number is :", dup)
//       arr.splice(arr[j], j)
//       console.log("after removing:", arr)
//     }
//   }
//   dup = arr[i]
// }

// console.log("final ans:", arr)