//var x = [1, 2, 3, 4, 5]


function perkalianUnik(x){
    var beforeResult =[]
    while(beforeResult.length < x.length){
        var output = 1
        for ( var i = 0 ; i < x.length ; i++){
            //console.log(x[i])
            output = output * x[i]}
        beforeResult.push(output)
        }
    var result = []
    for( var j = 0 ; j < beforeResult.length ; j++){
        result[j] = beforeResult[j]/x[j]
        }
//console.log(output)
//console.log(beforeResult)
//console.log(result)

    return result
}
console.log(perkalianUnik([2, 4, 6]));
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
//console.log(perkalianUnik)
/*if(i===0){
            output = output/x[0]
        }*/