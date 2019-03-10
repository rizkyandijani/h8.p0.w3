//var x = [1, 2, 3, 4, 5, 6]

/*function tentukanDeretAritmatika(x){
    for( var i = x.length-1  ; i > 1 ;  i-- ){
        if(x[i]-x[i-1]===x[0]){
            return true
        }
        else {
            return false
        }
    }
}*/

function tentukanDeretAritmatika(x){
    for(var i = x.length-1  ; i > 1 ;  i-- ){
        while(x[i] - x[i-1] !== x[0]){
            return false
        } 
    }
    return true
}


//console.log(tentukanDeretAritmatika(x))
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false