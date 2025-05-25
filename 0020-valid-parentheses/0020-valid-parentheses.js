/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for(const char of s){
        if(['(', '[', '{'].includes(char)){
            stack.push(char)
        } else {
            if(stack.length === 0 || bracketMap[char] !== stack.pop())
                return false;
        }
    }
    return stack.length === 0;
};