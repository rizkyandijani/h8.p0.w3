

/*function balikNama(string){
    var string = 'hello world'
    for( var i = 0 ; i < string.length ; i++){
        console.log(string[i])
    }
}*/
function balikNama(string){
    var reverse = ''
    for( var i = 1 ; i <= string.length ; i++){
        reverse += string[string.length-i]
        //console.log(reverse)
    }
    return reverse
}
    console.log(balikNama('hello world'))