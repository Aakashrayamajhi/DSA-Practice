// let prompt = require('prompt-sync')()
// let a = Number(prompt("enter a a number"))

const PromptSync = require("prompt-sync")

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