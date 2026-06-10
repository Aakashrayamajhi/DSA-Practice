// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// const strs = ["flower","flow","flight"]


var longestCommonPrefix = function(strs) {

    const first = strs[0]
     const second = strs[1]
      const third = strs[2]
      
      let arr1 =[]
           let arr2 =[]
                let arr3=[]

    
      for(let i = 0 ; i<first.length ; i++){
         arr1.push(first[i])
     
      }
         for(let i = 0 ; i<second.length ; i++){
         arr2.push(second[i])
 
      }
         for(let i = 0 ; i<third.length ; i++){
   arr3.push(third[i])
     
      }

      const lengths = strs.map(str => str.length);
      const minLength = Math.min(...lengths);

      let matchingLetters = "";

     for(let i = 0 ; i<minLength ; i++){
        if(arr1[i]===arr2[i]&& arr1[i]===arr3[i]){
          matchingLetters += arr1[i]; 
        
        }else{

break;
        }


};
     if(matchingLetters.length >0){
        console.log("common prefix:" , matchingLetters)
     }else{
        console.log("")
     }
}

longestCommonPrefix(["flower","flow","flight"])

//code that used for leetcode , 
/*var longestCommonPrefix = function(strs) {

    if(strs.length === 0) return "";

    // convert all strings into arrays
    let arrays = [];
    for(let i = 0; i < strs.length; i++){
        let temp = [];
        for(let j = 0; j < strs[i].length; j++){
            temp.push(strs[i][j]);
        }
        arrays.push(temp);
    }

    // minimum length
    const lengths = arrays.map(a => a.length);
    const minLength = Math.min(...lengths);

    let matchingLetters = "";

    for(let i = 0; i < minLength; i++){
        const currentChar = arrays[0][i];
        let allMatch = true;

        for(let j = 1; j < arrays.length; j++){
            if(arrays[j][i] !== currentChar){
                allMatch = false;
                break;
            }
        }

        if(allMatch){
            matchingLetters += currentChar;
        }else{
            break;
        }
    }

    return matchingLetters; // <-- return, not console.log
}; */

