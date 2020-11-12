//console.log('반가워요')
var sum = 0;
var limit = 1000;
for(var i=1; i<limit; i++){
  if (i%3==0||i%5==0){
    console.log(i)
    sum +=i;
  }
}

console.log(sum)
//console.log("답은 :" sum)
