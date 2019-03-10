//var num = 23821738098
function pasanganTerbesar(num){
    var pasangan = ''
    var numstring = num.toString()
    for( var i = 0 ; i < numstring.length ; i++){
        //console.log(pasangan)
        if(pasangan < Number(numstring[i]+numstring[i+1]))
        pasangan = Number(numstring[i]+numstring[i+1])
    }
    return pasangan 
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99