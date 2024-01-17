/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    for(const [index,value] of s.split('').entries()){
        if(value === '(' || value === '{' || value === '[')
            stack.push(value)
        else if (!stack.length) return false
        else if (stack[stack.length-1] === '(' && value !== ')' || stack[stack.length-1] === '{' && value !== '}' || stack[stack.length-1] === '[' && value !==']'){
            return false
        }
        else stack.pop()
    }
    
    return !stack.length
};
