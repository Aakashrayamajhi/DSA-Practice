var wordPattern = function(pattern, s) {
    let words = s.split(" ")
    if (pattern.length !== words.length) return false

    let pToW = new Map()
    let wToP = new Map()

    for (let i = 0; i < pattern.length; i++) {
        let p = pattern[i]
        let w = words[i]

        if (pToW.has(p) && pToW.get(p) !== w) return false
        if (wToP.has(w) && wToP.get(w) !== p) return false

        pToW.set(p, w)
        wToP.set(w, p)

        
    }

    return true
};
console.log(wordPattern("abba", "dog cat cat dog"))