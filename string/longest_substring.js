const s = "aaaaabbbb"

var lengthOfLongestSubstring = function(s) {
    let result = ""
for (let ch of s) {
  if (!result.includes(ch)) {
    result += ch;
  }

}

console.log(result);
};

lengthOfLongestSubstring(s)