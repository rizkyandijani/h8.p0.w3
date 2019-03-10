function tentukanDeretGeometri(x){
    for( var i = x.length-1 ; i > 0 ; i--){
        while( x[i] % x[i-1] !== 0 || x[i] === x[i-1]){
            return false
        }
    }
    return true
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false