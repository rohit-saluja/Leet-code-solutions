/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let first = 0
    let second = 0
    while(first < m && second < n){
        if(nums1[first] < nums2[second]){
            nums1.push(nums1[first])
            first = first + 1

        }else {
            nums1.push(nums2[second])
            second = second + 1
        }
    }
    while(first < m){
        nums1.push(nums1[first])
        first = first + 1
    }
    while(second < n){
        nums1.push(nums2[second])
        second = second + 1
    }
    nums1.splice(0,m+n)
};
