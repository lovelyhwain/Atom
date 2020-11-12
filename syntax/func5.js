var o ={
  k1:'v1',
  k2:'v2',
  k3:'v3',
  f1:function(){
    console.log(this.k1);
  },

  f2:function(){
    console.log(this.k2);
  }
};

o.f1();
o.f2();
