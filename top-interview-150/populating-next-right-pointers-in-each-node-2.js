var connect = function(root) {
    if (!root) return root;
    
    let queue = [root];
    let tempQueue = [];
        
    while(queue.length){
        let curr = queue.splice(0, 1)[0];
        let {left, right} = curr;
                
        if (left) tempQueue.push(left);
        if (right) tempQueue.push(right);
        
        if (queue.length === 0){
            curr.next = null;
            queue = tempQueue;
            tempQueue = [];
        }else{
            curr.next = queue[0];
        }
    }
    
    return root;
};
