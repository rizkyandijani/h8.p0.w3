//var x = 'katak'
function palindrome(kata){
var reversed = ''
for( var i = 1 ; i <= kata.length ; i++){
    reversed = reversed + kata[kata.length - i]
    //console.log('ini i ke ' + i + ',reversed = ' + reversed)
    }
    if(kata===reversed){
        return true
    }
    else {
        return false
    }
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false