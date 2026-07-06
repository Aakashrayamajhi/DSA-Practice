// let str = "asfhks f\'[]23-040 jsdnfjkas ihf "
// let result = str.replace(/[^a-zA-Z0-9 ]/g, "")
// console.log(result)

let arr = [1, 2, 3, 4, 5]
let k = 2
while (k > 0) {
    let last = arr[arr.length - 1]
    for (let i = arr.length - 1; i >= 0; i--) {

arr[i] = arr[i-1]

    }
    arr[0] = last
    k--
}
console.log(arr)