
//var x = ['cacing', 'ayam', 'kuda', 'anoa', 'kancil']



//function groupAnimals()
    /*var result = []
    for ( var i = 0 ; i < x.length ; i++){
        var temporary = []
        //temporary.push(x[i])
        //console.log(output)
        for( var j = 0 ; j < x.length ; j++){
            if( x[i][0] !== x[j][0] && x[i] !== x[j]){
                result.push(x[j])
            }
            else if( x[i][0] === x[j][0] && x[i] !== x[j] ){
                temporary.push(x[j])
                result.push(temporary)
            }
        }
    }*/


    //return output
//}
//var result = []

/*for( var i = 0 ; i< x.length ; i++){
    var temporary = []
    flag = false
    var counter = 0
    while( flag === false){
        if( x[i] !== x[counter]){ 
            if(x[i][0] === x[counter][0]){
            temporary.push(x[i],x[counter])
            result.push(temporary)
            flag = true
            }
        }
        else if( counter === x.length){
            result.push(x[i])
            flag = true
        }
        counter += 1
    }
}*/
function groupAnimals(x){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var output = []
    for( var i = 0 ; i < alphabet.length ; i++){
        var temporary = []
        for ( var j = 0 ; j < x.length ; j++){
            var flag = false
            if(alphabet [i] === x[j][0]){
                temporary.push(x[j])    
            }
        }
        if( temporary.length !== 0){
        output.push(temporary)
        }
    
    }
    return output
}


console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']))


//console.log(result)