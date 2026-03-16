let age = prompt("whats you age bruda:")
console.log(typeof age) //-> string , reason is so
console.log(typeof Number(age)) //->number why? bcz - Number(age) tries to convert age into number if string -"dfj" cames in prompt then the function return NaN - NOT A NUMBER then typeof return number bcz nan is related to number anything related to number will be return as number by typeof. 