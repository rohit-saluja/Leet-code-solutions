/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalTank = 0
    let start  = 0
    let currentTank = 0
    for(let i=0; i<gas.length; i++){
        let netCost = gas[i] - cost[i]
        totalTank = totalTank + netCost
        currentTank = currentTank + netCost
        if(currentTank < 0){
            currentTank = 0
            start = i + 1
        }

    }
    return totalTank < 0 ? -1 : start
};
