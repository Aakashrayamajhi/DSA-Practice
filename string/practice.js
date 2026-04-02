// let s = "aakash"
// for(let i = 0; i<s.length ; i++){
//     console.log(s.charAt(i))
// }

// let s = "madam"
// for(let i = s.length-1; i>=0; i--){
//     console.log(s.charAt(i))
// }


// let s = "madam"
// let j =1
// let isPalindrome = true
// for(let i = 0; i<s.length/2 ; i++){
//    if (s[i] == s[s.length - j]){

//    }else{
//     isPalindrome = false
//     break;
//    }
//        j++
// }

// if(isPalindrome){
//     console.log("string is palindrome")
// }else{
//     console.log("string is not palindrome")
// }

// let s = "hhhhii"
// let rev = ""

// for(let i = s.length-1 ; i >=0 ; i--){
//     rev = rev.concat(s[i])
// }
// console.log(rev)

// let a = "AaKaSh"
// let toggle = ""
// for(let i = 0 ; i<a.length ; i++){
//     if(a[i] == a[i].toUpperCase()){
//         toggle += a[i].toLowerCase()
//     } else {
//         toggle += a[i].toUpperCase()
//     }
// }
// console.log(toggle)

// let s = "aakash"
// let freq = {}

// for (let ch of s) {
//   freq[ch] = (freq[ch] || 0) + 1
// }

// console.log(freq)

// let arr = [10, 1, 3, 4, 12, 5]

// for (let j = 0; j < arr.length; j++) {
//   for (let i = 0; i < arr.length - j - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       let temp = arr[i];
//       arr[i] = arr[i + 1]
//       arr[i + 1] = temp
//     }
//   }
// }


var sortableIntegers = function(nums) {
    let temp = []
for(let i = 0 ; i<nums.length ; i++){
  let sum = nums[i] / nums.length
  if(Number.isInteger(sum)){
 temp.push(nums[i])
} 
}
    return temp
};
sortableIntegers([3,1,2])