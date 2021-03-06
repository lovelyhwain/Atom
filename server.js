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

// var http = require('http')
// var server = http.createServer();

var express = require('express')
var app = express()
app.set('view engine', 'pug'); // (1) //퍼그앤진쓰
app.set('views', './html'); // (2)
app.locals.pretty = true;
// server.on('request', doRequest);
// //server.listen(3003);
// console.log("program start!")
// function doRequest(req, res){
//   res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})
//   res.write('Hi welcome to Nodejs server\n')
//   res.write('안녕 최화인 서버야 훗 ')
//   res.end();
// }  지워도 실행됨!

app.use(express.static('data')) //data라는 파일을 들고와서 쓸수있음
//경로안에 있는것이 동작하겠다는 의미
 //라우터 생성하기
app.get('/', function(req, res){ //'/':슬러시 한개는 기본 위치를 뜻함  ex) localhost:3003
  res.send('<h3>여기는 메 dfddtdtdt<br> 홈페이지입니다.<h3>')  //응답에 대한 대답
});
// app.get('/login', function(req, res){
//   res.send('여기는 로그인 페이지입니다.')
// });

app.get('/topic', function(req, res){
  res.send('여기는 Topic 페이지입니다.')
});

app.get('/pug', function(req, res){
  res.render('news', {tl: '머릿말입니다.'}) //뉴스의 파일이 실행될거다.
});

app.get('/dynamic',function(req, res){
  // var sp = ''; //빈 문자열
  // for(var i=0; i<10; i++){
  //   sp=sp+ `<h1>${i}안알랴줌!!!<h1><br>`  //특이한 그레이브 부호
  // }
  // res.send(sp);
  res.send(`
    <script>  alert('안녕')
    yesorno=confirm('당신은 남자입니까?')
    document.open()
    if(yesorno==true)
    document.write("당신은<font color=red>남성</font>입니다.")
    else
    document.write("당신은<font color=blue>여성</font>입니다.")
     </script> `);
});

//http://localhost:3003/test/?id=1  Coffee가 나옴
app.get('/test', function(req,res){
  var arr=[
    'Coffee',
    'Tea',
    'Milk',
    'Cocoa',
    'juice',
    'Bubble Milk Tea'
  ]
  var pick = `
    <a href="/test?id=0">coffee</a><br>
    <a href="/test?id=1">tea</a><br>
    <a href="/test?id=2">milk</a><br>
    <a href="/test?id=3">cocoa</a><br>
    <a href="/test?id=4">juice</a><br>
    <a href="/test?id=5">Bubble milk tea</a><br><br>
    ${arr[req.query.id]}
    `
  //res.send(arr[req.query.id])
  res.send(pick)
})

//
// app.get('/test', function(req,res){
//   id = req.query.id;
//   qr = req.query.name;
//   res.send(id + ' , ' +qr);
// })

app.get('/inf', function(req, res){
  res.render('inf')
});

app.get('/info', function(req, res){
  res.send('비밀번호 변경창<br>'
            + req.query.id + ' 님 안녕하세요.<br>'
            + req.query.pw + ' 의 비밀번호를 수정하시겠습니까<br>'
            + req.query.pw + '==> ____________ '
            + '<a href="/infpop">변경</a>'
          )
});
app.get('/infpop', function(req, res){
  res.send(`/infpop 페이지입니다.`)
  //res.send(`<script>alert('변경완료')</script>`)
});

app.listen(3003, function(){ //80은 기본 포트 164.125.123.34
  console.log('server running 3003 port');
})
