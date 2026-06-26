var romanToInt = function(s) {
    const symbol = [
    "M","CM","D","CD","C","XC", "L","XL","X","IX","V","IV",
    "I"
  ]
    const values = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    
    let map = new Map()

    for( let i = 0 ; i < symbol.length ;  i++){
        map.set(symbol[i] , values[i])
    }
    
    let result = 0

    for(let i = 0 ; i < s.length ; i++){
        let curr = map.get(s[i])
        let next = map.get(s[i-1])
        if(next && (curr < next)) {
            result -= curr
        }else{
            result +=curr
        }
    } return console.log(result)
};

romanToInt("MCMXCIV")