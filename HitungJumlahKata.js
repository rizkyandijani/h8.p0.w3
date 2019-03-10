//var kata = 'I have a dream'

function hitungJumlahKata(x){
    var output = 0
    //var count = 0
    if( x !== "" && x[0] !== ' '){
        output = 1}
        //console.log(output)
    for(i = 0 ; i<x.length ; i++){
       if(x[i] === ' ' && i !== (x.length-1)){
           output += 1
       } 
    }
    //console.log(output)
    return output
}
//console.log(HitungJumlahKata(kata))
console.log(hitungJumlahKata('I have a dream')); // 4
//console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
//console.log(hitungJumlahKata('A song to sing')); // 4
//console.log(hitungJumlahKata('I')); // 1
//console.log(hitungJumlahKata('I believe I can code')); // 5