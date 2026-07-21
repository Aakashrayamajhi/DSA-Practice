var searchMatrix = function (matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        let end = matrix[i].length - 1
        
        if(target > matrix[i][end]){
            continue
        }else{
          let start = 0
          let end = matrix[i].length - 1

          while(start <= end){
            let mid = Math.trunc((start + end)/2)

            if(matrix[i][mid] === target){
                return true
            }else if(matrix[i][mid] < target){
                start = mid + 1
            }else{
                end = mid - 1
            }
          }
        }

    } return false
};

console.log(
    searchMatrix(
        [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]],
        34
    )
)