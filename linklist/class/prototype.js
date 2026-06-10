const first = {
    check1 : "Ego"
}

const second = {
    check2 : "never",
    __proto__: first
}

const third = {
    check3 : "Lose",
    __proto__ : second
}

console.log(third.check1 + " "+  third.check2 +" "+ third.check3)
console.log(third.__proto__)