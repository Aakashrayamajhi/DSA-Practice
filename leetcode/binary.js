const arr = [1, 3, 3, 3, 4, 4, 5, 6, 7, 9, 22, 33, 44, 55, 77]
let n = 69

let start = 0
let end = arr.length - 1

while (start <= end) {
    let mid = Math.trunc((start + end) / 2)

    if (arr[mid] === n) {
        console.log("Found:", arr[mid])
        break
    }

    if (n > arr[mid]) {
        start = mid + 1
    } else {
        end = mid - 1
    }
}

if (start > end) {
    console.log("Not AVAILABLE")
}