/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let idx = 0

    for(let i = 0 ; i < chars.length ; i++){

        let count = 0
        let char =  chars[i]

        while(i < chars.length && char === chars[i]){
            i++ 
            count++
            console.log(chars[i])
        }

         chars[idx++] = char

         if(count > 1){
            let str = count.toString()

            for(let ch of str){
             chars[idx++] = ch
            }
         }
        
        i--

       console.log( chars.length)
        
    } return idx
    
};

console.log(compress(["a","a","a","a","b","b","b","b","b","b","b","b","b","b"]))