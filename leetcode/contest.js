/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} mul
 * @return {number}
 */

var maxSum = function(nums, k, mul) {
    let sum = 0
    nums.sort((a,b) => b-a)
    console.log(nums)

    if(k === 0){
        return 0
    }

    for(let i = 0 ; i < k ; i++){
        if(mul <= 0){
            sum += nums[i]
        }else{
            sum += nums[i] * mul
            mul--
        }
       
    } return sum
};

console.log(maxSum([6,1,2,9] , 3 , 2))