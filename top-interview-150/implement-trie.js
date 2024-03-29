
var Trie = function() {
    this.root = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root
    for(const ch of word){
        if(node[ch] === undefined) node[ch] = {}
        node = node[ch]
    }
    node.isWord = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const node =  this.traverse(word)
    return node !== null && node.isWord == true
};


Trie.prototype.traverse = function(word){
    let node = this.root;
    for(const ch of word){
        if(node[ch] === undefined) return null
        node = node[ch]
    }
    return node
}
/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    const node = this.traverse(prefix)
    return node !== null
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
