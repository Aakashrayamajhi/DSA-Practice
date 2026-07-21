var maxOperations = function(nums, k) {
    let count = 0
    nums.sort((a,b)=>a-b)
    let left = 0
    let right = nums.length - 1

    while(left < right){
       let sum = nums[left] + nums[right]

       if(sum === k){
        count++
        left++
        right--
       }else if(sum < k){
        left++
       }else{
        right--
       }
      
    } return count
};

console.log(maxOperations([4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4], 2)) 