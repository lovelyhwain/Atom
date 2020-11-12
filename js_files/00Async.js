var fs = require('fs')
console.log('첫째에요')
var data = fs.readFile('sample.txt', {enconding:'utf-8'}, function(err,data){
  if (err) throw err;
   console.log(data);
})   //fuction이 callback임
     //fs.readFile('<directory>', (err, data) => 문제가 생기면 err 없으면 data를 뛰움
     //sync와는 다르게 서버타임이 빠르게 끝나는 것부터 해결하고 파일스트림은 마지막에 됨
console.log('데이터에요')
console.log('둘째에요')
