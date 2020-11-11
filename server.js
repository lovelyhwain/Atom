// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

var http = require('http')
var server = http.createServer();

var express = require('express')
var app = express()

// server.on('request', doRequest);
// //server.listen(3003);
// console.log("program start!")
// function doRequest(req, res){
//   res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})
//   res.write('Hi welcome to Nodejs server\n')
//   res.write('안녕 최화인 서버야 훗 ')
//   res.end();
// }  지워도 실행됨!

app.use(express.static('pic1.jpg')) //data라는 파일을 들고와서 쓸수있음
//경로안에 있는것이 동작하겠다는 의미
 //라우터 생성하기
app.get('/', function(req, res){ //'/':슬러시 한개는 기본 위치를 뜻함  ex) localhost:3003
  res.send('<h3>여기는 Main<br> 홈페이지입니다.<h3>')  //응답에 대한 대답
});
// app.get('/login', function(req, res){
//   res.send('여기는 로그인 페이지입니다.')
// });
app.get('/topic', function(req, res){
  res.send('여기는 Topic 페이지입니다.')
});

app.get('/dynamic', function(req, res){
  var sp = ''; //다 받아들일수있는 상황임 숫자계산시에는 *1을 해줌 /문자는 빈칸을 더해줌 이는 문자열이고 아무것도 담기지않는다는 의미
  for(var i=0;i<10;i++){ //동적으로 실행
    //sp=sp+ '<h1>안알랴줌!!<h1><br>'  //그레이브 GRAVE작성 ''안에 쓰는 내용은 전부 자바가 html을 품은 것이 됨
    sp=sp+ `'${1}경고'`
  };
  res.send(sp);
})

app.listen(3003, function(){
  console.log('server running 3003 port');
})
