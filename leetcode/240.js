/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        let last = matrix[i].length - 1
        if (matrix[i][0] <= target && target <= matrix[i][last]) {

            let start = 0
            let end = matrix[i].length - 1

            while (start <= end) {
                let mid = Math.trunc((start + end) / 2)

                if (matrix[i][mid] === target) {
                    return true
                } else if (matrix[i][mid] < target) {
                    start = mid + 1
                } else {
                    end = mid - 1
                }
            }
            
        }
    } return false
};

console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]] , 5))