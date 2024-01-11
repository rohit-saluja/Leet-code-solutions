/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const max_length = Math.max(...wordDict.map(word=>word.length))
    const dp = Array(s.length+1).fill(false)
    dp[0] = true
    for(let i=1; i<s.length+1;i++){
        for(let j=i; j>i-max_length-1;j--){
            if(dp[j] && wordDict.includes(s.substring(j,i))){
                dp[i] = true
                break
            }

        }
    }
    return dp[s.length]
};
