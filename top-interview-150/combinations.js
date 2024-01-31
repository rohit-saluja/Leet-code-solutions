/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = []
    const numbers = []
    for(let i=1; i<=n; i++){
        numbers[i-1] = i
    }
    const backtracking = (k,path,numbers)=>{
        if(k===path.length) return result.push(path)
        for(const [index,number] of numbers.entries()){
            backtracking(k,[...path,number],numbers.slice(0,index))
        }
    }
    backtracking(k,[],numbers)
    return result
};
