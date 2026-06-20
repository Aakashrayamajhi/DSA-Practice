var getLeastFrequentDigit = function(n) {
    let str = String(n)
    let map = new Map()
    
    for(let i = 0 ; i < str.length ; i++){
        if(map.has(str[i])){
            map.set(str[i] , map.get(str[i]) + 1)
        }else{
            map.set(str[i] , 1 )
        }  
    }

let count = Infinity
let number = 9

for( let [key , value] of map ){
   key = Number(key)
    if(count > value || (count ===  value && key < number)){
        count = value  //1
        number = key
    }
  
}
  console.log(number)



};

getLeastFrequentDigit(11553322)