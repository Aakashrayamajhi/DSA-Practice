// 🧩 Problem: Minimum Moves to Find Breaking Floor
// You are given:
// An integer n representing number of floors
// There exists a floor f such that:
// Any egg dropped from floor > f breaks
// Any egg dropped from floor ≤ f does not break
// You have 2 eggs.
// Return the minimum number of moves required to determine 
// the exact value of f in the worst case.

const superegg = (n , f)=>{
  let moves = 0
  let covered = 0
  let prev = 0
while(covered < n){
    moves++
    prev = covered
    covered += moves

    if(covered > f) break
   }

   for(let i = prev + 1 ; i < covered ; i++){
    moves++
    if(i === f) return console.log("minimum moves :", moves ,
        "floor chai:", i
    )
   }
}
superegg(150 , 20)