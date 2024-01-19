/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   const result =  s.split(' ').map(value=>value.trim()).filter(value=>value).reverse().join(' ')
   return result
};
