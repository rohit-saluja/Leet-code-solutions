/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const result = []
    let i = 0
    let j = 0
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            result.push(nums1[i])
            i = i + 1
        }else {
            result.push(nums2[j])
            j = j + 1
        }

    }
    while(i<nums1.length){
        result.push(nums1[i])
        i = i + 1
    }
    while(j<nums2.length){
        result.push(nums2[j])
        j = j + 1
    }
    if(result.length %2 === 0){
        const first = Math.floor(result.length/2) - 1
        const second = Math.floor((result.length)/2)
        return (result[first] + result[second])/2
    }else {
        return (result[Math.floor(result.length/2)])
    }
};
