/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rotten = []
    let fresh = 0
    const rows = grid.length
    const cols = grid[0].length
    let result = 0
    for(let i=0; i<rows;i++){
        for(let j=0; j<cols; j++){
            if(grid[i][j] === 2)rotten.push([i,j])
            else if(grid[i][j] === 1)fresh = fresh + 1
        }
    }
    const queue = [...rotten]
    const directions = [
        [1,0],
        [0,1],
        [-1,0],
        [0,-1]
    ]
    while(queue.length && fresh){
        const queueLength = queue.length
        for(let i=0; i<queueLength;i++){
            const [row,col] = queue.shift()
            for(const [dx,dy] of directions){
                const x = dx + row
                const y = dy + col
                if(x < 0 || x > rows-1 || y < 0 || y > cols-1)
                    continue
                if(grid[x][y] === 2 || grid[x][y] === 0)
                    continue
                grid[x][y] = 2
                queue.push([x,y])
                fresh = fresh - 1
            }
        }
        result = result + 1
    }
    return fresh === 0 ? result : -1
};
