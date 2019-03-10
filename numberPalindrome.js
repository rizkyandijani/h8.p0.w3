/*var number1 = 90
//function palindrome(kata){
    var stringnumber = number1.toString()
    var reversed1 = ''
    var angka = 0
    for( var i = 1 ; i <= stringnumber.length ; i++){
        if(stringnumber.length>1){
            reversed = reversed1 + stringnumber[stringnumber.length - i]
            console.log('ini i ke ' + i + ',reversed = ' + reversed1)
            angka = Number(reversed1) 
            }
            else {
            reversed1 = stringnumber
            console.log( reversed )
            angka = Number(reversed1) 
            }
        }
        if(number1!==reversed1 && number > 9 ){
            while(angka <=  )
            
        }*/
        //var x = 9
        //var x = 0
        //var x = 12
        //var num = 0
       /* function palindrome(num){
            //var num = x
            var numString = num.toString()
            var reversed = ''
            for( var i = 1 ; i <= numString.length ; i++){
                reversed = reversed + numString[numString.length - i]
                //console.log('ini i ke ' + i + ',reversed = ' + reversed)
                }
                if(numString===reversed){
                    return true
                }
                else {
                    return false
                }
            }
//console.log(palindrome(21))
            function isPalindrome(num){
                if(palindrome(num)){
                    num = num + 1
                    //console.log(num)
                    }

                while(!palindrome(num)){
                    num = num + 1
                    //console.log(num)
                    }
                return num
            }*/

//console.log(palindrome(9))
//console.log(isPalindrome(1231))

//var num = 9

function isPalindrome(num){
    var flag = false
    while( flag === false){
        num += 1
        var stringNum = num.toString()
        var reversed = ''
        for( var i = 0 ; i < stringNum.length ; i++){
            reversed = reversed + stringNum[stringNum.length - (i+1)]}
        //console.log(reversed)    
        if(stringNum === reversed){
            flag = true}}
    
    
    return num
}
console.log(isPalindrome(232193102))