/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false
    const smap = new Map()
    const tmap = new Map()
    for(let i=0; i<s.length; i++){
        if(smap.get(s[i]) !== tmap.get(t[i])) return false
        if(smap.has(s[i])) smap.set(s[i],smap.get(s[i]) + 1)
        else smap.set(s[i],i+1)
        if(tmap.has(t[i])) tmap.set(t[i],tmap.get(t[i]) + 1)
        else tmap.set(t[i],i+1)
    }
    return true
};
