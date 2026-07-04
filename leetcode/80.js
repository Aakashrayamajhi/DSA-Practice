function removeduplicate(nums){

if(nums.length <= 2) return nums.length

let k = 2
let count = 0

for(let i = 2 ; i < nums.length ; i++){
    if(nums[i] !== nums[k-2]){
        nums[k] = nums[i]
        k++
        count++

    }
}
return k

}
console.log(removeduplicate([1,2,3,4,5]))