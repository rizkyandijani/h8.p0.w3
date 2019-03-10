//var arr = [1, 2, 3, 4, 5]

function cariMean(arr){
    
    var output = 0
    for( var i = 0 ; i < arr.length ; i++){ 
        output += arr[i]
    }
    //console.log(output)
    var result = output / arr.length
    if(result % 1 < 0.5){
        result = Math.floor(result)
    }
    else if(result % 1 >= 0.5){
        result = Math.ceil(result)
    }
    //console.log(result)
    return result
}

console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7