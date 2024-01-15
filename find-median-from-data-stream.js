
var MedianFinder = function() {
    this.arr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    const binarySearch = (num)=>{
        let left = 0
        let right = this.arr.length-1
        while(left <=right){
            let mid = Math.floor((left+right)/2)
            if(this.arr[mid] > num)left = mid + 1
            else right = mid - 1
        }
        this.arr.splice(left,0,num)
    }
    if(this.arr.length === 0)this.arr.push(num)
    else binarySearch(num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const mid = Math.floor(this.arr.length/2)
    return this.arr.length%2 === 0 ? (this.arr[mid-1] + this.arr[mid])/2 : this.arr[mid]
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
