let matrix = [[1, 2, 3], [3, 2, 2], [3, 4, 3]]

let maxsum = 0
let pos = -1

for (let row = 0; row < matrix.length; row++) {
    let sum = 0

    for (let col = 0; col < matrix[row].length; col++) {
        sum += matrix[row][col]
    }

    if (sum > maxsum) {
    maxsum = sum
    pos = row
}
}


console.log("maxsum : " , maxsum + " " , "pos:" ,  pos)