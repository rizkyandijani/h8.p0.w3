var animals = ['ayam' , 'udang' , 'kucing' , 'burung' , 'kucing']
//var str = 'domba'
function findIndex(arr,str){    
    //var index = 0
    for( var i = 0 ; i < arr.length ; i++){
        if(arr[i] === str){
            return i
        }
        else if( i === arr.length){
            return -1
        }
    }
    return -1
    
}

console.log(findIndex(animals,'ayam'))