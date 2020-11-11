var fs = require('fs') //파일함수 호출
console.log('첫째에요');
var data = fs.readFileSync('sample.txt', {encoding:'utf-8'}) //동기화 싱크 동기적인 순서대로 파일을 읽겠다
console.log(data);
console.log('셋째에요');
