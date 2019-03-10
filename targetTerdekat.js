//var y = [' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x']

function targetTerdekat(y){
    var output = 0
    var x = []
    var o = 0
    //result = 0
    for( var i = 0 ; i < y.length ; i++){
        if(y[i] !== 'x'){
            output = 0
        }
        else{
            x.push(i)
        }
        if(y[i] === 'o'){
           var o = i
        }
    }
    for( var j = 0 ; j < x.length ; j++){
        if(Math.abs(x[j]-o) < Math.abs(x[0]-o)){
            output = Math.abs(x[j]-o)
        }
        else{
            output = Math.abs(x[0]-o)
        }
    }
    //console.log(x)
    //console.log(o)
    //console.log(output)
    return output
}


console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2