
// //INSRTION SORT
// let arr = [3, 1, 4, 5, 2]

// for (let i = 1; i < arr.length; i++) {
//     let current = arr[i]
//     let j = i - 1

//     while (j >= 0 && arr[j] > current) {
//         arr[j + 1] = arr[j]
//         j--
//     }

//     arr[j + 1] = current
// }
// console.log(arr)

//BUBBLE SORT

// let arr = [3, 1, 4, 5, 2]

// for (let i = 0; i < arr.length; i++) {

//     for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j + 1]
//             arr[j + 1] = arr[j]
//             arr[j] = temp
//         }
//     }


// }

// console.log(arr)



//recursion

// function reverse(n){
// if(n === 0) return
// reverse(n-1)
// console.log(n)
// }
// reverse(10)

let factorial = 1
function fact(n){  //5 ,4 ,3 ,2 ,1 ,0
if(n===0)return 1
return n * fact(n-1)  

}
console.log(fact(5))

