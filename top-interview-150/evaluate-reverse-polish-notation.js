/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []
    for(const token of tokens){
        if(!Number.isNaN(Number(token))){
            stack.push(token)
        }else {
            const b = Number(stack.pop())
            const a = Number(stack.pop())
            if(token === '+') {
                stack.push(a+b)
            }
            else if (token === '-') {
                stack.push(a-b)
            }
            else if (token === '*') {
                stack.push(a*b)
            }
            else if(token === '/') {
                stack.push(a/b > 0 ? Math.floor(a/b) : Math.ceil(a/b))
            }
        }
        
    }
    return stack[0]
};
