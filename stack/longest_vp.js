var isValid = function(s) {
    let stack = [];
    let count = 0

    for (let char of s) {

        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } 
        else {
            if (stack.length === 0) return false;

            let top = stack.pop();

            if (
                (char === ")" && top == "(") ||
                (char === "}" && top == "{") ||
                (char === "]" && top == "[")
            ) {
          count++
        }
    }

  
}
  return count*2;
}

console.log(isValid("(()}"))