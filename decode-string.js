/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = []
    for(const ch of s){
        if(ch !== ']'){
            stack.push(ch)
            continue
        }
        let str = ''
        let curr = stack.pop()
        while(curr !== '['){
            str = curr + str
            curr = stack.pop()
        }
        let num = ''
        curr = stack.pop()
        while(!Number.isNaN(Number(curr))){
            num = curr + num
            curr = stack.pop()
        }
        stack.push(curr)
        stack.push(str.repeat(Number(num)))
    }
    return stack.join('')
};
