/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let result = []

    let top = 0
    let buttom = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1

    while(top <= buttom && left <= right){

        //top row  top - right
        for(i = top ; i <= right; i++){
            result.push(matrix[top][i])
        }
        top++

        //right-column right-buttom

        for(let i = top ; i<= buttom ; i++){
            result.push(matrix[i][right])
        }
        right--
        
        //buttom row  rightbuttom - leftbuttom
           for(let i = right; i >= left ; i--){
            if(top === buttom){
                break
            }
            result.push(matrix[buttom][i])
           }
        
        buttom--

        //left column -- buttom - top

            for(let i = buttom ; i >= top; i--){
                if(left === right){
                    break
                }
                result.push(matrix[i][left])
            }
        
        left++

    }

    return result

};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))