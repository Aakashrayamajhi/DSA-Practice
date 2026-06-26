var b/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
 let count = 0

 for(let i = 1 ; i <= n ; i++){
    if( n % i === 0){
        count++
    }
 }
 let result = 0
 if( count % 2 === 0){
   result = n - count
 }else {
   result = count
 }
 return result
};

console.log(bulbSwitch(3))