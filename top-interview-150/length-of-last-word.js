/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const array = s.split(' ').map(value=>value.trim()).filter(value=>value)
    return array[array.length-1].length
};
