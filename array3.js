var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
function dataHandling2(input){
    input.splice(1,1,'Roman Alamsyah Elsharawy')
    input.splice(4,1,'Pria','SMA Internasional Metro')
    var inline =[]
    for(i = 0 ; i < input.length ; i++){
        inline.push(input[i])
    }
    var inline1 = inline
    console.log(inline1)
    var tanggal =  input[3].split('/')
    
    switch(tanggal[1]){
        case '01':
        console.log('Januari');
        break;
        case '02':
        console.log('Februari');
        break;
        case '03':
        console.log('Maret');
        break;
        case '04':
        console.log('April');
        break;
        case '05':
        console.log('Mei');
        break;
        case '06':
        console.log('Juni');
        break;
        case '07':
        console.log('Juli');
        break;
        case '08':
        console.log('Agustus');
        break;
        case '09':
        console.log('September');
        break;
        case '10':
        console.log('Oktober');
        break;
        case '11':
        console.log('November');
        break;
        case '12':
        console.log('Desember')
        break;
        }
  tanggal.sort (function(a,b){return b-a});
  console.log(tanggal)
  tanggal.push(tanggal[0])
  tanggal.shift()
  tanggal1 = tanggal.join('-');
  console.log(tanggal1)
  var name = input[1].slice(0,15)
  console.log(name)
  console.log('/')
}

dataHandling2(input)






