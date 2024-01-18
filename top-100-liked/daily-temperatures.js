/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const result = Array(temperatures.length).fill(0)
    const stack = []
    for(const [index,value] of temperatures.entries()){
        let startTemperature = index
        while(stack.length &&  stack[stack.length-1][1] < temperatures[index]){
            let [pos,temperature] = stack.pop()
            result[pos] = index - pos
        }
        stack.push([startTemperature,temperatures[index]])
    }
    return result
};
