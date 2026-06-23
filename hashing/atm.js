// ========== Minimum Notes to Make Amount =====
// You are given an integer amount.
// You are also given currency denominations:
// [1000, 500, 100, 50, 20, 10, 5, 1]
// Return the minimum number of notes for each denomination needed 
// to form the given amount using a greedy approach 

const atm = (amount)=>{
  const cash = [1000, 500, 100, 50, 20, 10, 5, 1]

  for(let i= 0 ; i < cash.length ; i++){
    let count = Math.trunc(amount / cash[i])
    if(count > 0){
        console.log(`Rs${cash[i]} : ${count}`)
        amount %= cash[i]
    }
  }
}

console.log("for rs 3000")
atm(3000)
console.log("fro 9348")
atm(9348)