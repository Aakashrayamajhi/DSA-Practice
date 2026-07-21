let matrix = [[1,2,3] , [3,3,2] , [1,2,1]]
// console.log(matrix.length)
// const rowlength = matrix.length
// let collength = 0

// for(let i = 0 ; i < matrix.length ; i++){
//    collength = matrix[i].length
// }
// console.log(collength)

// let totallen = rowlength * collength
// console.log("totallen:" , totallen)

// //lets try to cal the sum of one of the primary diagonal
// // \
// //   \
// //     \
// // pattern :  [0 ,0] -> [1,1] -> [2,2] ... [n,n]

// let sum = 0
// for(let row = 0 ; row < matrix.length ; row++){
//     for(let col = 0 ; col < matrix[row].length ; col++){
//         if(row === col){
//             sum += matrix[row][col]
//         }
//     }
// }

// console.log("sum of primary diagonal:", sum)

// let ssum = 0

// for(let row = 0 ; row < matrix.length ; row++){
//     for(let col = 0 ; col < matrix[row].length ; col++){
//         if(row + col === matrix.length - 1){
//             ssum += matrix[row][col]
//         }
//     }
// }
// console.log("sum of secondary diagonal:", ssum)


// optimize way

let sum = 0
let n = matrix.length

for(let i = 0; i < n ; i++){
    sum += matrix[i][i]

    if(i !== n - 1 - i){
        sum += matrix[i][n-1-i]
    }
}

console.log(sum)