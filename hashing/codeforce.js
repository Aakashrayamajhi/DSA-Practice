// Given an array of integers nums and an integer k, 
// return the length of the longest subarray whose sum is equal to k.
// A subarray is a contiguous part of the array.
// input - nums = [1, -1, 5, -2, 3] and k = 3 
// output = 4

function longestsubarray(nums , k){
   let map = new Map()
   let sum = 0 , largest = 0;
   map.set(sum , -1)

   for(let i = 0 ; i<nums.length ; i++){
    sum += nums[i]
    if(map.has(sum - k)) largest = Math.max(largest , i - map.get(sum - k))

    if(!map.has(sum)) map.set(sum , i)
   }
return largest
}

console.log(longestsubarray([1, -1, 5, -2, 3],3))