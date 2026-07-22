/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    while (s.indexOf(part) !== -1) {
        let i = s.indexOf(part)
        s = s.slice(0 , i) + s.slice(i + part.length )
        console.log(s.slice( 1))
        
    } return s
};

console.log(removeOccurrences("daabcbaabcbc", "abc"))