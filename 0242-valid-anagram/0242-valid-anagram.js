/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let freq = new Array(26).fill(0);
    for(let i=0; i<s.length; i++){
        freq[(s.charCodeAt(i) - 97)]++;
        freq[(t.charCodeAt(i) - 97)]--;
    }
    return freq.every((count) => count == 0);
};