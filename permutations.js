/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = []
    const backtracking = (path,nums)=>{
        if(!nums.length){
            result.push(path)
            return 
        }
        for(const [index,value] of nums.entries()){
            backtracking([...path,value],[...nums.slice(0,index),...nums.slice(index+1)])
        }
    }
    backtracking([],nums)
    return result
};
