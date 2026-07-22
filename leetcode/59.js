/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {

    let top = 0
    let buttom = n
    let left = 0
    let right = n

    let des = n * n
    console.log(des)

    let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0))
 
    let num = 1

    while(top <= buttom && left <= right){
     
        for(let i = left ; i <= right ; i++){
            matrix[]
        }
       

    
    }

    return matrix
    
};

console.log(generateMatrix(3))