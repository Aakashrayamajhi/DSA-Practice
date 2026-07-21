/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack = []

    for (let i = 0; i < asteroids.length; i++) {
        let curr = asteroids[i]
        let destroyed = false

        if (curr < 0 && stack.length > 0) {

            for (let j = stack.length - 1; j >= 0; j--) {

            
                if (stack[j] > 0) {

                    if (Math.abs(curr) > stack[j]) {
                        stack.pop()
                    } else if (Math.abs(curr) === stack[j]) {
                        stack.pop()
                        destroyed = true
                        break
                    } else {
                        destroyed = true
                        break
                    }

                } else {
                    break // no collision
                }
            }

            if (!destroyed) {
                stack.push(curr)
            }

        } else {
            stack.push(curr)
        }
    }

    return stack
}

console.log(asteroidCollision([3,5,-6,2,-1,4]))