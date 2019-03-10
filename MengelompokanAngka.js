
//var x = [2, 4, 6] 


function mengelompokkanAngka(x){
    var output = []
    var multipliedbythree = []
    var even = []
    var odd = []
    for( var i = 0 ; i < x.length ; i++){
        if( x[i] % 3 === 0 ){
            multipliedbythree.push(x[i])
        }
        if( x[i] % 2 !== 0 && x[i] % 3 !== 0){
            odd.push(x[i])
        }
        if( x[i] % 2 === 0 && x[i] % 3 !== 0){
            even.push(x[i])
        }
    }
    //console.log(multipliedbythree)
    //console.log(odd)
    //console.log(even)
    output.push(even,odd,multipliedbythree)
    //console.log(output)
    
    
    return output
}

console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]