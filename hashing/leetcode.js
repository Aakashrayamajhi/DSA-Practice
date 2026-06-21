// var getLeastFrequentDigit = function(n) {
//     let str = String(n)
//     let map = new Map()
    
//     for(let i = 0 ; i < str.length ; i++){
//         if(map.has(str[i])){
//             map.set(str[i] , map.get(str[i]) + 1)
//         }else{
//             map.set(str[i] , 1 )
//         }  
//     }

// let count = Infinity
// let number = 9

// for( let [key , value] of map ){
//    key = Number(key)
//     if(count > value || (count ===  value && key < number)){
//         count = value  //1
//         number = key
//     }
  
// }
//   console.log(number)



// };

// getLeastFrequentDigit(11553322)


// --------=== sort the people===---------

function sortpeople(names , heights){
 let map = new Map()
 let newheights = [...heights].sort((a,b)=>b-a)
 console.log(newheights)

for(let i =0 ; i< heights.length ;  i++){
    map.set(heights[i] , names[i])
}

let result = []

for(let i = 0 ; i < newheights.length ; i++){
   result.push(map.get(newheights[i]))
}

 console.log(result)

}

sortpeople(["a" , "b" , "c"] , [1 , 2 , 3])