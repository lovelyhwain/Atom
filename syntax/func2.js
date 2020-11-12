var arr = ['hwain','female','country','age']

var o = {'name' : 'hwain',
          'sex' : 'female',
      'country' : 'Korea',
           'age':'26'
         }

for(var x in o){
  console.log(x, o[x]);
}

console.log(o.name, o['name']);
