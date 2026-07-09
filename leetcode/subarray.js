const { jsxs } = require("react/jsx-runtime")

let arr = [ 1,2,3,4,5 ]
let n = arr.length
let totalsubarr = (n * (n +1))/ 2
console.log(totalsubarr)

for(let i = 0; i < n ; i++){
    for(let j = i ; j < n ; j++){
        let sub = []
     for(let k = i; k <=j ; k++){
        sub.push(arr[k])
     }
     console.log(sub)
    }
}

let max = 0
for(let i = 0 ; i < n ; i++){
    let cur = 0
    for(let j = i; j<n ; j++){
      cur += num[j]
      max = Math.max(cur , max)
    }
}
console.log(max)