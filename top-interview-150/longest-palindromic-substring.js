/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = ''
    const isPalindromeString = (i,j,s)=>{
        while(i>=0 && j<s.length && s[i] === s[j]){
            i = i - 1
            j = j + 1
        }
        return s.substring(i+1,j)
    }
    for(const [i,value] of s.split('').entries()){
        const currentStringOne = isPalindromeString(i,i,s)
        const currentStringTwo = isPalindromeString(i,i+1,s)
        const large = (currentStringOne.length > currentStringTwo.length ? currentStringOne : currentStringTwo)
        result = result.length > large.length ? result :large
    }
    return result
};
