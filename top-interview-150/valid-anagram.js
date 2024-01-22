function isAnagram(s: string, t: string): boolean {
    const sLength = s.length
    const tString = t.length
    if(sLength != tString)
        return false
    const sArray = s.split('');
    const tArray = t.split('');
    sArray.sort();
    tArray.sort();
    for(const [index,value] of sArray.entries()){
        if(sArray[index] !== tArray[index]){
            return false
        }
    }
    return true

};
