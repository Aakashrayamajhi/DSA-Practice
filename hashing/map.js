let map = new Map()

map.set("name", "Aakash Jung Rayamajhi")
map.set("age" , 23)
map.set("address" , "suddhodhan-7 manmateria")

for(let [key , value] of map){
    console.log(key + "==>" + value)
}

console.log("lets print only keys")

for(let key of map.keys()){
    console.log(key)
}

console.log("lets print only values")

for(let values of map.values()){
    console.log(values)
}

console.log("lets to some extra creative stuff")

for(let key of map){
    console.log(key)
}

console.log("lets check its size")
console.log(map.size)

console.log("lets check 23 is availabe in vlaue or not")

function findValue(map) {
    for (let value of map.values()) {
        if (value === 23) {
            return true;
        }
    }
    return false
}
console.log(findValue(map))

console.log("changing the value of map using get method")



console.log(map)