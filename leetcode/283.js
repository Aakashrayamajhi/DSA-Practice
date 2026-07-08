function movezero(nums) {


    for (let i = 0; i < nums.length; i++) {
        let j = i + 1
        if (nums[i] === 0) {

            while( j < nums.length) {
                if(nums[j] !== 0){
                    break
                }
                j++
            }
            if(j === nums.length) break
            nums[i] = nums[j]
            nums[j] = 0
        }
     
        

    }
    return nums
}
console.log(movezero([0, 1, 0, 2, 3, 4]))